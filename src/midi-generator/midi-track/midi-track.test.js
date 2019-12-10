import MidiTrack from "./midi-track";

describe("MidiTrack", function() {
  describe("addNoteOn", function() {
    it("should add note on event with specified params", function() {
      const track = new MidiTrack();
      track.addNoteOn(1, 69, 50);
      expect(track.events[0].param2).toStrictEqual(50);
    });
  });
});
