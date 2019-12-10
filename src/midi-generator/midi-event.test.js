import MidiEvent from "./midi-event";

describe("MidiEvent", function() {
  describe("type", function() {
    it("should error when incorrect type is input", function() {
      const constructor = () => {
        new MidiEvent({ type: 0x70, channel: 10 });
      };
      try {
        constructor();
      } catch (error) {
        expect(error.message).toBe("Trying to set an unknown event: 112");
      }
    });
    it("should initialise with the type", function() {
      const event = new MidiEvent({ type: 0x80, channel: 10 });
      expect(event.type).toBe(128);
    });
  });
  describe("type", function() {
    it("should error when incorrect channel is input", function() {
      const constructor = () => {
        new MidiEvent({ channel: 100, type: 0x80 });
      };
      try {
        constructor();
      } catch (error) {
        expect(error.message).toBe("100 is out of bounds.");
      }
    });
    it("should initialise with the channel", function() {
      const event = new MidiEvent({ channel: 10, type: 0x80 });
      expect(event.channel).toBe(10);
    });
  });
});
