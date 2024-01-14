import {createContext, useEffect, useState, useContext} from 'react'
import db from '../firebase'
import {ref, onValue} from 'firebase/database'

const FirebaseContext = createContext(null)

const FirebaseProvider = ({children}) => {
  const [liveAnalysis, setLiveAnalysis] = useState(null)
  const [transcript, setTranscript] = useState(null)

  useEffect(() => {
    const conversationRef = ref(db, '/conversation/live_analysis')
    const transcriptRef = ref(db, '/conversation/transcriptions')

    // Listen for updates
    const convUnsub = onValue(conversationRef, (snapshot) => {
      const data = snapshot.val()
      setLiveAnalysis(data)
    })

    const transUnsub = onValue(transcriptRef, (snapshot) => {
      const data = snapshot.val()
      setTranscript(data)
    })

    // Unsubscribe from updates when the component is unmounted
    return () => {
      convUnsub()
      transUnsub()
    }
  }, [])

  return (
    <FirebaseContext.Provider value={{liveAnalysis, transcript}}>
      {children}
    </FirebaseContext.Provider>
  )
}

const useAnalysis = () => {
  const {liveAnalysis} = useContext(FirebaseContext)
  return liveAnalysis
}

const useTranscript = () => {
  const {transcript} = useContext(FirebaseContext)
  return transcript
}

export {FirebaseProvider, useAnalysis, useTranscript}
