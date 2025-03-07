export * from '@total-typescript/ts-reset'
declare global {
  // https://twitter.com/erikras/status/1673694889974833152
  // eslint-disable-next-line @typescript-eslint/ban-types
  type StrictOmit<T, K extends keyof T> = Omit<T, K>
}