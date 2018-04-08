import Subject from "./Subject";

export default class Observer {
  name: string //为啥需要name属性， 目标subject移除观察者需要这个参数，你也可以设定一个唯一不变的uuid值
  update(sub: Subject) {} //更新操作之前，传入Subject参数（可以不需要该参数），对其进行检查，保证发出通知的目标是该observer的目标
}