import Context from "./Context";
import AddStrategy from "./AddStrategy";
import SubStrategy from "./SubStrategy";

let calculator = new Context(new AddStrategy())

console.log(calculator.excute(10, 13))

calculator = new Context(new SubStrategy())

console.log(calculator.excute(10, 13))
