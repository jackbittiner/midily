import { EVENT_CODES } from "./event-code-constants";

class MidiEvent {
  constructor({ type }) {
    if (type !== null || type !== undefined) {
      this.setType(type);
    }
  }

  setType(type) {
    if (type < EVENT_CODES.NOTE_OFF || type > EVENT_CODES.PITCH_BEND) {
      throw new Error("Trying to set an unknown event: " + type);
    }

    this.type = type;
  }
}

export default MidiEvent;
