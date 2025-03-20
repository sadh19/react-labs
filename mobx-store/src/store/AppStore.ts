import { makeAutoObservable, autorun } from "mobx";

export class AppStore {

  count = 0;

  constructor() {
    makeAutoObservable(this);
    autorun(() => console.log(this.countTotal));
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


