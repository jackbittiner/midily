import {frequencyToMidi} from "./index"

describe("frequencyToMidi", function() {
    it.each`
      frequency   | midi  
      ${27.5}     | ${21} 
      ${261.63}   | ${60}    
      ${440}      | ${69} 
      ${1975.5}   | ${95}
      ${3729.3}   | ${106}  
    `(
      "should return $midi from $frequency",
      ({ frequency, midi }) => 
      {
        expect(frequencyToMidi(frequency)).toEqual(midi)
      }
    );
  });