import { EVENT_CODES } from "./event-code-constants";

class MidiEvent {
  constructor({ type, channel }) {
    if (type && channel) {
      this.setType(type);
      this.setChannel(channel);
    }
  }

  setType(type) {
    if (type < EVENT_CODES.NOTE_OFF || type > EVENT_CODES.PITCH_BEND) {
      throw new Error("Trying to set an unknown event: " + type);
    }

    this.type = type;
  }

  setChannel(channel) {
    if (channel < 0 || channel > 15) {
      throw new Error(channel + " is out of bounds.");
    }

    this.channel = channel;
  }
}

export default MidiEvent;
