import React, { useState, useRef, useEffect } from "react";

const AudioRecorder = ({
  isRecording,
  setIsRecording,
  onStopRecording,
  onRecordingEnded,
}) => {
  const audioChunk = useRef([]);
  const [recording, setRecording] = useState(null);
  const mediaRecorderRef = useRef(null);
  const startTimeRef = useRef(null);
  const timeLimit = 25000; // 25 seconds
  const autoStopTime = 30000; // 30 seconds
  // const [autoStopTime, setAutoStopTime] = useState(30000); // Initial auto stop time
  // const [timeLimit, settimeLimit] = useState(25000); // Initial auto stop time

  useEffect(() => {
    if (isRecording) {
      startRec();
    } else {
      stopRec();
    }
  }, [isRecording]);

  const startRec = async () => {
    audioChunk.current = [];
    console.log("Recording started");

    // try {
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
      onRecordingEnded(audioUrl);
      console.log("Audio", audioBlob);
    };

    mediaRecorderRef.current = mediaRecorder;
    startTimeRef.current = Date.now();
    mediaRecorder.start();

    setTimeout(() => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        alert("Hurry up! You have only 5 seconds remaining.");
      }
    }, timeLimit);

    // Set timeout to stop recording after autoStopTime
    setTimeout(stopRec, autoStopTime);

    // Set timeout to stop recording after autoStopTime
    // setTimeout(stopRec, autoStopTime - (Date.now() - startTimeRef.current)); // Adjusting timeout based on time elapsed

    // } catch (error) {
    //   console.error("Error accessing microphone:", error);
    // }
  };

  const stopRec = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log("Recording stopped");
    }
  };

  return (
    <div>
      {/* <audio controls src={recording} /> */}
    </div>
  );
};

export default AudioRecorder;
