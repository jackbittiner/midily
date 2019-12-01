import React, {useState} from 'react';

const Recorder = () => {
    const [audioContext, setAudioContext] = useState(null)

    const getMicrophone = async () => {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      setAudioContext(audio);
    }

    const stopMicrophone = () => {
      audioContext.getTracks().forEach(track => track.stop());
      setAudioContext(null);
    }

    const toggleMicrophone = () => {
      if (audioContext) {
        stopMicrophone();
      } else {
        getMicrophone();
      }
    }

    return(
        <div>
            <button onClick={() => toggleMicrophone()}>{audioContext ? "Turn Mic Off" : "Turn Mic On"}</button>
        </div>
    )
}

export default Recorder;