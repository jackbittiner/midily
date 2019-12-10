export const MIDI_FILE = {
  HDR_CHUNKID: "MThd", // file magic cookie:
  HDR_CHUNK_SIZE: "\x00\x00\x00\x06", // Header length for SMF
  HDR_TYPE0: "\x00\x00", // Midi Type 0 id
  HDR_TYPE1: "\x00\x01", // Midi Type 1 id
  HDR_SPEED: "\x00\x80" // Defaults to 128 ticks per beat
};
