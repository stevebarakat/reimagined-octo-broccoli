export function localStorageSet(item: string, data: string | number | object) {
  return localStorage.setItem(item, JSON.stringify(data));
}

export function localStorageGet(item: string) {
  const stringified = localStorage.getItem(item);
  return stringified && JSON.parse(stringified);
}
