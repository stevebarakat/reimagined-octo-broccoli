export function array(length: number, filler?: unknown) {
  return Array(length).fill(filler || null);
}

export function roundToFraction(num: number, frac: number): number {
  return parseFloat((Math.round(num * frac) / frac).toFixed(2));
}

export function objectToMap(obj: object) {
  return new Map(Object.entries(obj));
}

export function mapToObject(map: Map<number, object>) {
  return Object.fromEntries(map.entries());
}
