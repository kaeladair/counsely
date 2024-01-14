import React, {useEffect, useRef} from 'react'
import RecordRTC from 'recordrtc'

const VoiceActivityComponent = (props) => {
  const recordingRef = useRef(false)
  const recorder = useRef(null)
  const microphone = useRef(null)
  const audioContextRef = useRef(null)
  const voiceProcessorNodeRef = useRef(null)
  const recordingPropRef = useRef(props.recording)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({audio: true})
      .then((stream) => {
        microphone.current = stream

        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext()
        }
        const audioContext = audioContextRef.current
        const mediaStreamSource = audioContext.createMediaStreamSource(stream)

        audioContext.audioWorklet
          .addModule('/voice-processor.js')
          .then(() => {
            voiceProcessorNodeRef.current = new AudioWorkletNode(
              audioContext,
              'voice-processor',
            )
            mediaStreamSource.connect(voiceProcessorNodeRef.current)

            voiceProcessorNodeRef.current.port.onmessage = (event) => {
              if (event.data === 'start') {
                startRecording()
              } else if (event.data === 'stop') {
                stopRecording()
              }
            }
          })
          .catch((err) => {
            console.error(`Failed to add audio worklet: ${err}`)
          })
      })
      .catch((err) => {
        console.error(`Failed to get user media: ${err}`)
      })

    return () => {
      // Clean up
      if (microphone.current) {
        microphone.current.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  useEffect(() => {
    if (voiceProcessorNodeRef.current) {
      voiceProcessorNodeRef.current.port.postMessage({active: props.recording})
    }

    recordingPropRef.current = props.recording

    if (!props.recording) {
      stopRecording()
    }
  }, [props.recording])

  const startRecording = () => {
    if (!recordingRef.current && recordingPropRef.current) {
      console.log('Start Recording')
      const options = {
        type: 'audio',
        recorderType: RecordRTC.StereoAudioRecorder,
        desiredSampRate: 16000,
        numberOfAudioChannels: 1,
      }

      recorder.current = RecordRTC(microphone.current, options)
      recorder.current.startRecording()
      recordingRef.current = true
    }
  }

  const stopRecording = () => {
    if (recordingRef.current) {
      recordingRef.current = false
      console.log('Stop Recording')
      recorder.current.stopRecording(() => {
        const audioBlob = recorder.current.getBlob()

        const reader = new FileReader()
        reader.readAsDataURL(audioBlob)
        reader.onloadend = () => {
          const base64Audio = reader.result
          props.onAudio(base64Audio)
        }
      })
    }
  }

  return <></>
}

export default VoiceActivityComponent
