import MidiEvent from "./midi-event";

describe("frequencyToMidi", function() {
  describe("type", function() {
    it("should error when incorrect type is input", function() {
      const constructor = () => {
        new MidiEvent({ type: 0x70 });
      };
      try {
        constructor();
      } catch (error) {
        console.log(error);
        expect(error.message).toBe("Trying to set an unknown event: 112");
      }
    });
  });
});
