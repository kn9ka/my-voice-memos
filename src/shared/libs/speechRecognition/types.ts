import { ListeningOptions } from "react-speech-recognition";

// abstract class for speech recognition
export type SpeechRecognition = {
  transcript: string;
  isListening: boolean;
  recognitionInstance: globalThis.SpeechRecognition | null;
  start: () => Promise<void>;
  stop: () => Promise<void>;
  reset: () => void;
};

export type SpeechRecognitionParams = ListeningOptions | undefined;
