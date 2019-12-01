import React, {useState} from 'react';

const Recorder = () => {
    const [audio, setAudio] = useState(null)

     const getMicrophone = async () => {
        const audioContext = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        });
        setAudio({ audioContext });
      }

    return(
        <div>
            <button onClick={() => getMicrophone()}>Allow Access To Audio</button>
        </div>
    )
}

export default Recorder;