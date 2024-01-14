class VoiceProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [{name: 'threshold', defaultValue: 0.1}]
  }

  constructor() {
    super()
    this.frameCount = 0 // Initialize a frame count
    this.timeoutFrames = 0 // Initialize a timeout in terms of audio frames
    this.voiceActivityDetected = false

    this.port.onmessage = (e) => {
      this.onmessage(e)
    }
  }

  onmessage(event) {
    if (event.data.active !== undefined) {
      this.active = event.data.active // Set the active flag based on the message
    }
  }

  process(inputs, outputs, parameters) {
    if (!this.active) {
      return true
    }

    const input = inputs[0]
    const output = outputs[0]
    const threshold = parameters.threshold[0]

    // Increment the frame count for each process call
    this.frameCount += input[0].length

    for (let i = 0; i < input.length; i++) {
      const channelData = input[i]
      const average =
        channelData.reduce((acc, val) => acc + Math.abs(val), 0) /
        channelData.length

      output[i].set(channelData)

      if (this.voiceActivityDetected) {
        if (average < threshold) {
          if (this.timeoutFrames === 0) {
            // Set the timeout in terms of audio frames. For example, for a 3-second timeout at a 44.1kHz sample rate:
            this.timeoutFrames = this.frameCount + 2 * 44100
          }

          if (this.frameCount >= this.timeoutFrames) {
            this.port.postMessage('stop')
            this.voiceActivityDetected = false
            this.timeoutFrames = 0
          }
        } else {
          this.timeoutFrames = 0
        }
      }

      if (!this.voiceActivityDetected && average > threshold) {
        this.port.postMessage('start')
        this.voiceActivityDetected = true
        this.timeoutFrames = 0
      }
    }
    return true
  }
}

registerProcessor('voice-processor', VoiceProcessor)
