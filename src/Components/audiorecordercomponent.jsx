import React, { useState, useRef } from "react";
import AxiosInstance from "../api/AxiosInstance";

const AudioRecorder = () => {
    const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState(null);
    const [recording, setRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = () => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunksRef.current.push(e.data);
            }
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(chunksRef.current, { type: "audio/wav" });
            const formData = new FormData();
            formData.append("audio", audioBlob, "recorded_audio.wav");

            // Now you can send the formData to your API using Axios
            AxiosInstance.post("get_audio/", formData)
                .then(response => {
                    // Handle the response here
                    console.log(response.data);
                })
                .catch(error => console.error("Error sending audio:", error));

            chunksRef.current = [];
        };

        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
        setRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };

    return (
        <div>
            <h2>Audio Recorder</h2>
            <main>
                <div className="audio-controls">
                    {!permission ? (
                        <button onClick={getMicrophonePermission} type="button">
                            Get Microphone
                        </button>
                    ) : (
                        <>
                            <button onClick={recording ? stopRecording : startRecording} type="button">
                                {recording ? "Stop" : "Record"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AudioRecorder;
