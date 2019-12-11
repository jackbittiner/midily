import MidiFile from "./midi-file";
import MidiTrack from "../midi-track/midi-track";
var fs = require("fs");

describe("MidiFile", function() {
  describe("test run", function() {
    it("should do something", function() {
      const file = new MidiFile();
      const track = new MidiTrack();
      file.addTrack(track);

      track.addNote(1, 0x3c, 64);

      track.addNote(1, 0x3e, 64);
      track.addNote(1, 0x40, 64);
      track.addNote(1, 0x41, 64);
      track.addNote(1, 0x43, 64);
      track.addNote(1, 0x45, 64);
      track.addNote(1, 0x47, 64);
      track.addNote(1, 0x48, 64);
      console.log(file.toBytes());

      fs.writeFileSync("test.mid", file.toBytes(), "binary");
    });
  });
});
