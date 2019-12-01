export const frequencyToMidi = (frequency) => {
  return Math.round(69 + (12 * Math.log2(frequency / 440)))
}