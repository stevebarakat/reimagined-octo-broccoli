// convert a value from one scale to another
// e.g. App.util.scale(-96, -192, 0, 0, 100) to convert
// -96 from dB (-192 - 0) to percentage (0 - 100)

export const scale = function (
  val: number,
  from1: number,
  from2: number,
  to1: number,
  to2: number
) {
  return ((val - from1) * (to2 - to1)) / (from2 - from1) + to1;
};

// make scale logarithmic
export const makeLogarithmic = (value: number) =>
  Math.log(value + 101) / Math.log(101);

// convert decibels to a percentage
export const dbToPercent = function (dB: number) {
  return scale(dB, 0, 1, -100, 0);
};
