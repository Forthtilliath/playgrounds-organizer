export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }
}

export function setUrl(newUrl: string) {
  window.history.pushState(null, "", newUrl)
}