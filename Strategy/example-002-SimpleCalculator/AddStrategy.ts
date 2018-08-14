
import Strategy from './Strategy'
export default class AddStrategy implements Strategy {
  constructor(){}
  excute(num1, num2) {
    return num1+num2
  }
}
