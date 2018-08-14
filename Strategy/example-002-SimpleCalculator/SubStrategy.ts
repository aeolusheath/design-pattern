import Strategy from './Strategy'
export default class SubStrategy implements Strategy {
  constructor() {}
  excute(num1, num2) {
    return num1 - num2
  }
}