export function stringToBytes(str, finalBytes) {
  if (finalBytes) {
    while (str.length / 2 < finalBytes) {
      str = "0" + str;
    }
  }

  let bytes = [];
  for (let i = str.length - 1; i >= 0; i = i - 2) {
    let chars = i === 0 ? str[i] : str[i - 1] + str[i];
    bytes.unshift(parseInt(chars, 16));
  }

  return bytes;
}
