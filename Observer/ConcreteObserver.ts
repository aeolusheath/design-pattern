import ConcreteSubject  from './ConcreteSubject'
import Observer from './Observer'

export default class ConcreteObserver extends Observer {
  subject: ConcreteSubject
  name: string //为啥需要name属性， 目标subject移除观察者需要这个参数，你也可以设定一个唯一不变的uuid值
  constructor(object: {sub: ConcreteSubject, name: string}) {
    super()
    this.subject = object.sub
    this.name = object.name
  }
  //更新操作之前，传入Subject参数（可以不需要该参数），对其进行检查，保证发出通知的目标是该observer的目标
  update(sub: ConcreteSubject) {
    //todo you code with new state
    if(sub === this.subject)
      console.log(`观察者 ${this.name} 观察的目标subject的state发生了变化`,this.subject.getState())
  }
}
