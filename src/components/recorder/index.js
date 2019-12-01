import React, {useState} from 'react';

const Recorder = () => {
    const [audioContext, setAudioContext] = useState(null)

     const getMicrophone = async () => {
        const audio = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        });
        setAudioContext({ audio });
      }

    return(
        <div>
            <button onClick={() => getMicrophone()}>Allow Access To Audio</button>
        </div>
    )
}

export default Recorder;