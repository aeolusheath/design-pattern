import Compositor from "./Compositor";

export default class implements Compositor {
  constructor(){}
  compose(param: any){
    console.log('策略2')
  }
}