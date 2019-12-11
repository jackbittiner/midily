import { EVENT_CODES } from "../constants/event-code-constants";
import { translateTickTime } from "../utils/translate-tick-time";

class MidiEvent {
  constructor({ type, channel, param1, param2, time }) {
    if (type && channel && param1) {
      this.setType(type);
      this.setChannel(channel);
      this.setParam1(param1);
      this.setParam2(param2);
      this.setTime(time);
    }
  }

  setTime(ticks) {
    this.time = translateTickTime(ticks || 0);
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

  toBytes() {
    let byteArray = [];

    let typeChannelByte = this.type | (this.channel & 0xf);

    byteArray.concat(byteArray, this.time);
    byteArray.push(typeChannelByte);
    byteArray.push(this.param1);
    if (this.param2 !== undefined && this.param2 !== null) {
      byteArray.push(this.param2);
    }
    return byteArray;
  }
}

export default MidiEvent;
