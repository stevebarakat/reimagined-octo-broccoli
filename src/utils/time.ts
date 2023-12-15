export function formatSeconds(seconds: number) {
  let s: string | number = Math.floor(seconds % 60);
  let m: string | number = Math.floor(((seconds * 1000) / (1000 * 60)) % 60);
  let str = "";

  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  str += m + ":";
  str += s;
  return str;
}

export function formatMilliseconds(seconds: number): string {
  let ms: string | number = Math.floor((seconds * 1000) % 1000);
  let s: string | number = Math.floor(seconds % 60);
  let m: string | number = Math.floor(((seconds * 1000) / (1000 * 60)) % 60);
  let str = "";

  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  ms = ms < 10 ? "0" + ms : ms;
  str += m + ":";
  str += s + ":";
  str += ms.toString().slice(0, 2);
  return str;
}
