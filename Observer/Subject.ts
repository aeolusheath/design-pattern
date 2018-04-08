import Observer from './Observer'
export default class Subject {
  private observers: Observer[]
  protected constructor(){
    this.observers = []
  }
  public attach(obj: Observer) {
    this.observers.push(obj)
  }
  public dettach(obj: Observer) {
    let index = this.observers.findIndex(item=>item.name === obj.name)
    this.observers.splice(index, 1)
  }
  public getObservers () {
    return this.observers
  }
  public notify() {}
}