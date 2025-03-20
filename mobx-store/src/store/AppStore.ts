import { makeAutoObservable } from "mobx"

export class AppStore {

  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }

  get countTotal() {
    return this.count;
  }

}


