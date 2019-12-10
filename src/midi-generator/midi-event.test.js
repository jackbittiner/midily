import MidiEvent from "./midi-event";

describe("MidiEvent", function() {
  describe("type", function() {
    it("should error when incorrect type is input", function() {
      const constructor = () => {
        new MidiEvent({ type: 0x70, channel: 10, param1: 50 });
      };
      try {
        constructor();
      } catch (error) {
        expect(error.message).toBe("Trying to set an unknown event: 112");
      }
    });
    it("should initialise with the type", function() {
      const event = new MidiEvent({ type: 0x80, channel: 10, param1: 50 });
      expect(event.type).toBe(128);
    });
  });
  describe("type", function() {
    it("should error when incorrect channel is input", function() {
      const constructor = () => {
        new MidiEvent({ channel: 100, type: 0x80, param1: 50 });
      };
      try {
        constructor();
      } catch (error) {
        expect(error.message).toBe("100 is out of bounds.");
      }
    });
    it("should initialise with the channel", function() {
      const event = new MidiEvent({ channel: 10, type: 0x80, param1: 50 });
      expect(event.channel).toBe(10);
    });
  });
  describe("Param 1 and 2", function() {
    it("should initialise with the channel", function() {
      const event = new MidiEvent({
        channel: 10,
        type: 0x80,
        param1: 20,
        param2: 40
      });
      expect(event.param1).toBe(20);
      expect(event.param2).toBe(40);
    });
  });
});
