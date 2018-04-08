import Subject from './Subject'
import Observer from './Observer'
export default class ConcreteSubject extends Subject {
  state: number
  constructor () {
    super()
    this.state = 0
  }
  getState () {
    return this.state
  }
  setState (state: number) {
    let changeStatus = state === this.state
    this.state = state
    if (!changeStatus)
      this.notify()
  }
  attach(obj: Observer){
    super.attach(obj)
  }
  dettach(obj: Observer){
    super.dettach(obj)
  }
  notify() {
    this.getObservers().forEach(observer=>{
      observer.update(this)
    })
  }
}