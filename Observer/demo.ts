import ConcreteSubject from './ConcreteSubject'
import ConcreteObserver from './ConcreteObserver'

// step 1 目标
var newSub = new ConcreteSubject()

// step 2 观察者
let observer1 = new ConcreteObserver({sub: newSub, name: 'o1'})
let observer2 = new ConcreteObserver({sub: newSub, name: 'o2'})

// step 3 将观察者观察目标
newSub.attach(observer1)
newSub.attach(observer2)

// step 4 目标变化, 观察结果
newSub.setState(5)

