import MidiFile from "./midi-file";
import MidiTrack from "../midi-track/midi-track";
const fs = require("fs");

describe("MidiFile", function() {
  describe("test run", function() {
    it("should do something", function() {
      const file = new MidiFile();
      const track = new MidiTrack();
      file.addTrack(track);

      track.addNote(1, 0x3c, 64);

      track.addNote(1, 22, 64);
      track.addNote(1, 107, 64);
      track.addNote(1, 56, 64);
      track.addNote(1, 92, 64);
      track.addNote(1, 71, 64);
      track.addNote(1, 89, 64);
      track.addNote(1, 33, 64);

      fs.writeFileSync("test.mid", file.toBytes(), "binary");
    });
  });
});
