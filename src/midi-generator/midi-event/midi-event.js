import { EVENT_CODES } from "./event-code-constants";

class MidiEvent {
  constructor({ type, channel, param1, param2 }) {
    if (type && channel && param1) {
      this.setType(type);
      this.setChannel(channel);
      this.setParam1(param1);
      this.setParam2(param2);
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

  setParam1(param) {
    this.param1 = param;
  }

  setParam2(param) {
    this.param2 = param;
  }
}

export default MidiEvent;
