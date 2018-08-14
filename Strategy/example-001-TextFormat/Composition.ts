import Compositor from "./Compositor";

export default class Composition {
  private _compositor
  constructor(compositor: Compositor) {
    this._compositor = compositor
  }
  repair() {
    this._compositor.compose()
  }
}