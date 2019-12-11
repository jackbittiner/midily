export function translateTickTime(ticks) {
  let buffer = ticks & 0x7f;

  while ((ticks = ticks >> 7)) {
    buffer <<= 8;
    buffer |= (ticks & 0x7f) | 0x80;
  }

  let bList = [];
  while (true) {
    bList.push(buffer & 0xff);

    if (buffer & 0x80) {
      buffer >>= 8;
    } else {
      break;
    }
  }
  return bList;
}
