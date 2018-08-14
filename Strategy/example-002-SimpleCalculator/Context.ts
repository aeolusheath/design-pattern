import Strategy from './Strategy'
export default class Context {
  private _stratey
  constructor(strategy: Strategy) {
    this._stratey = strategy
  }
  excute(num1, num2) {
    return this._stratey.excute(num1, num2)
  }
}