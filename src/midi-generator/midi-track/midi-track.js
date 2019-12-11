import MidiEvent from "../midi-event/midi-event";
import { EVENT_CODES } from "../constants/event-code-constants";
import { DEFAULTS } from "../constants/defaults";
import { TRACK_BYTES } from "../constants/track-bytes";
import { stringToBytes } from "../utils/stringToBytes";

class MidiTrack {
  constructor() {
    this.events = [];
  }

  addNoteOn(channel, pitch, time, velocity) {
    const event = new MidiEvent({
      channel: channel,
      type: EVENT_CODES.NOTE_ON,
      param1: pitch,
      param2: velocity || DEFAULTS.DEFAULT_VOLUME,
      time: time || 0
    });
    this.events.push(event);
  }

  addNoteOff(channel, pitch, time, velocity) {
    const event = new MidiEvent({
      channel: channel,
      type: EVENT_CODES.NOTE_OFF,
      param1: pitch,
      param2: velocity || DEFAULTS.DEFAULT_VOLUME,
      time: time || 0
    });
    this.events.push(event);
  }

  addNote(channel, pitch, dur, time) {
    this.addNoteOn(channel, pitch, time, DEFAULTS.DEFAULT_VOLUME);
    if (dur) {
      this.addNoteOff(channel, pitch, dur, DEFAULTS.DEFAULT_VOLUME);
    }
  }

  toBytes = function() {
    let trackLength = 0;
    let eventBytes = [];
    let startBytes = TRACK_BYTES.START_BYTES;
    let endBytes = TRACK_BYTES.END_BYTES;

    const addEventBytes = event => {
      const bytes = event.toBytes();
      trackLength += bytes.length;
      eventBytes.push.apply(eventBytes, bytes);
    };

    this.events.forEach(addEventBytes);

    trackLength += endBytes.length;

    const lengthBytes = stringToBytes(trackLength.toString(16), 4);

    return startBytes.concat(lengthBytes, eventBytes, endBytes);
  };
}

export default MidiTrack;
