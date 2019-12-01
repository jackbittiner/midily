import React, {useState} from 'react';
import { frequencyToMidi } from "../../frequency-to-midi"

const Converter = () => {
    const [inputValue, setInputValue] = useState(null)
    const [midiResult, setMidiResult] = useState(null)
    return(
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => {setMidiResult(frequencyToMidi(inputValue))}}>Convert</button>
            {midiResult && <p>{midiResult}</p>}
        </div>
    )
}

export default Converter;