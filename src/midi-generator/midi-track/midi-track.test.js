import MidiTrack from "./midi-track";

describe("MidiTrack", function() {
  describe("addNoteOn", function() {
    it("should add note on event with specified params", function() {
      const track = new MidiTrack();
      track.addNoteOn(1, 69, 50);
      expect(track.events[0].param2).toStrictEqual(50);
    });
    it("should default velocity to 90 if not given", function() {
      const track = new MidiTrack();
      track.addNoteOn(1, 69);
      expect(track.events[0].param2).toStrictEqual(90);
    });
  });
  describe("addNoteOff", function() {
    it("should add note on event with specified params", function() {
      const track = new MidiTrack();
      track.addNoteOff(1, 69, 50);
      expect(track.events[0].param2).toStrictEqual(50);
    });
    it("should default velocity to 90 if not given", function() {
      const track = new MidiTrack();
      track.addNoteOff(1, 69);
      expect(track.events[0].param2).toStrictEqual(90);
    });
  });
});
