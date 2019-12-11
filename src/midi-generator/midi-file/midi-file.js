import { MIDI_FILE_CONSTANTS } from "../constants/midi-file-constants";
import { stringToBytes } from "../utils/stringToBytes";
import { codesToString } from "../utils/codes-to-string";

class MidiFile {
  constructor() {
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  toBytes() {
    let trackCount = this.tracks.length.toString(16);

    let bytes =
      MIDI_FILE_CONSTANTS.HDR_CHUNKID +
      MIDI_FILE_CONSTANTS.HDR_CHUNK_SIZE +
      MIDI_FILE_CONSTANTS.HDR_TYPE0;

    bytes += codesToString(stringToBytes(trackCount, 2));
    bytes += MIDI_FILE_CONSTANTS.HDR_SPEED;

    this.tracks.forEach(function(track) {
      bytes += codesToString(track.toBytes());
    });

    return bytes;
  }
}

export default MidiFile;
