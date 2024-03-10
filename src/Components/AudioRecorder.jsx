import { useState, useRef } from "react";

const AudioRecorder = () => {
  const audioChunk = useRef([]);
  const [recording, setRecording] = useState(null);
  const mediaRecorderRef = useRef(null);
  const startTimeRef = useRef(null);
  const timeLimit = 60000; // 60 seconds
  const autoStopTime = 90000; // 90 seconds

  const startRec = async () => {
    // Clear the previous recording data
    audioChunk.current = [];
    console.log("Recording started");

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        audioChunk.current.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunk.current, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setRecording(audioUrl);
      console.log("Audio", audioBlob);
    };

    mediaRecorderRef.current = mediaRecorder;
    startTimeRef.current = Date.now();
    mediaRecorder.start();

    // Set timeout to display alert after 60 seconds
    setTimeout(() => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        alert("Recording has reached 60 seconds.");
      }
    }, timeLimit);

    // Set timeout to stop recording after 90 seconds
    setTimeout(stopRec, autoStopTime);
  };

  const stopRec = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold">Audio Recorder</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startRec}
      >
        Start Recording
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={stopRec}
      >
        Stop Recording
      </button>
      <audio controls src={recording} />
    </div>
  );
};

export default AudioRecorder;
