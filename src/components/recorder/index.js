import React, { useState } from "react";

const Recorder = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordingData, setRecordingData] = useState([]);

  const getMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    const recorder = new MediaRecorder(audio);
    setMediaRecorder(recorder);
    setAudioContext(audio);
  };

  const stopMicrophone = () => {
    audioContext.getTracks().forEach(track => track.stop());
    setAudioContext(null);
  };

  const toggleMicrophone = () => {
    if (audioContext) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  };

  const startRecording = () => {
    mediaRecorder.start();
    mediaRecorder.ondataavailable = function(e) {
      setRecordingData(recordingData.concat(e.data));
    };
  };

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  return (
    <div>
      <button onClick={() => toggleMicrophone()}>
        {audioContext ? "Turn Mic Off" : "Turn Mic On"}
      </button>
      <button onClick={() => startRecording()}>START RECORD SOMETHING</button>
      <button onClick={() => stopRecording()}>STOP RECORD SOMETHING</button>
    </div>
  );
};

export default Recorder;
