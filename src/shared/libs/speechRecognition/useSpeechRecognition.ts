import ReactSpeechRecognition, {
  useSpeechRecognition as useReactSpeechRecognition,
} from "react-speech-recognition";

import { SpeechRecognition, SpeechRecognitionParams } from "./types";

export const useSpeechRecognition = (
  options: SpeechRecognitionParams = {}
): SpeechRecognition => {
  const {
    transcript,
    listening,
    resetTranscript: reset,
  } = useReactSpeechRecognition();

  const start = () => ReactSpeechRecognition.startListening(options);
  const stop = () => ReactSpeechRecognition.stopListening();

  return {
    transcript,
    isListening: listening,
    start,
    stop,
    reset,
  };
};
