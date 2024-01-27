import { useState, useRef } from "react";

const AudioRecorder = () => {
  const audioChunk = useRef([]);
  // const [recordings, setRecordings] = useState([]);
  const[recording,setRecording]=useState(null);
  const mediaRecorderRef = useRef(null);

  const startRec = async () => {
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
      // setRecordings((prevRecs) => [...prevRecs, audioUrl]);
      console.log("Audio",audioBlob);
    };
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
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
      <div className="text-2xl font-bold">Audio Recorder </div>
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
      {/* {recordings.map((recordings, index) => (
        <div key={index}>
          <audio controls src={recordings} />
          <a href={recording} download={`recording-${index}.wav`}>
            Download
          </a>
        </div>
      ))} */}
    </div>
  );
};

export default AudioRecorder;
