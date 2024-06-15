'use client'
import { useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { CircleX,Download, Clipboard } from 'lucide-react';
import { useToast } from './ui/use-toast';

export default function Modal({ onClose }) {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [transcriptName, setTranscriptName] = useState('First Transcript');
  const [isTitleSet, setIsTitleSet] = useState(false);
  const { toast } = useToast()

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const handleButtonClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      startListening();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return "";
  }

  function closeTab() {
    SpeechRecognition.stopListening();
    onClose();
  }

  const handleTitleSubmit = () => {
    if (transcriptName.trim()) {
      setIsTitleSet(true);
    }
  };

  const resetHandler = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    toast({
      variant: "success",
      title: "Copied To Clipboard",
      description: "",
    })

    
  };

  const downloadTranscript = () => {
    const element = document.createElement("a");
    const file = new Blob([transcript], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${transcriptName}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
    toast({
      variant: "success",
      title: "Transcript downloaded successfully",
      description: "",
    })
  };

  return (
    <div className='z-50 fixed m-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-95 text-white left-0 top-0 transition-opacity duration-300'>
      <button
        onClick={closeTab}
        className='absolute text-white text-xs cursor-pointer p-1 border-none right-2.5 top-2.5'
      >
        <CircleX color="red" />
      </button>

      {!isTitleSet ? (
        <div className='flex flex-col items-center'>
          <h1 className='mb-4 text-xlxl'>Enter Transcript Title</h1>
          <input
            type="text"
            placeholder="Enter transcript title"
            value={transcriptName}
            onChange={(e) => setTranscriptName(e.target.value)}
            className='text-base rounded border border-gray-300 text-black mb-5 p-2.5 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button 
            onClick={handleTitleSubmit}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg'
          >
            Start Recording
          </button>
        </div>
      ) : (
        <>
          <h1 className='mb-4 text-2xl font-semibold'>{transcriptName}</h1>
          <div className='flex flex-row gap-4'>
            <button 
              className={`px-6 py-2 rounded-lg shadow-md transition duration-300 ${listening ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white`}
              onClick={handleButtonClick}
            >
              {listening ? 'Stop' : 'Start'}
            </button>
            <button 
              className='px-6 py-2 bg-gray-300 text-black rounded-lg shadow-md transition duration-300 hover:bg-gray-400'
              onClick={resetHandler}
            >
              Reset
            </button>
          </div>
          <div className='relative w-4/5 h-[300px] overflow-y-auto border p-4 border-solid border-gray-300 mt-4 rounded-lg bg-white text-black'>
            <p>{transcript}</p>
            <button
              className='absolute bottom-1.5 right-8' title="Download Transcript"
              onClick={downloadTranscript}
            >
              <Download className='h-5 w-5'/>
            </button>
            <button className='absolute bottom-1.5 right-1.5' title="Copy To Clipboard" onClick={handleCopy}>
              <Clipboard className='h-5 w-5' />
            </button>

          </div>

        </>
      )}
    </div>
  );
}
