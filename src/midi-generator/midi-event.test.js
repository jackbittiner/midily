import MidiEvent from "./midi-event";

describe("MidiEvent", function() {
  describe("type", function() {
    it("should error when incorrect type is input", function() {
      const constructor = () => {
        new MidiEvent({ type: 0x70 });
      };
      try {
        constructor();
      } catch (error) {
        expect(error.message).toBe("Trying to set an unknown event: 112");
      }
    });
    it("should initialise with the type", function() {
      const event = new MidiEvent({ type: 0x80 });
      expect(event.type).toBe(128);
    });
  });
});
