import MidiEvent from "../midi-event/midi-event";
import { EVENT_CODES } from "../constants/event-code-constants";
import { DEFAULTS } from "../constants/defaults";

class MidiTrack {
  constructor() {
    this.events = [];
  }

  addNoteOn(channel, pitch, velocity) {
    const event = new MidiEvent({
      channel: channel,
      type: EVENT_CODES.NOTE_ON,
      param1: pitch,
      param2: velocity || DEFAULTS.DEFAULT_VOLUME
    });
    this.events.push(event);
  }
}

export default MidiTrack;
