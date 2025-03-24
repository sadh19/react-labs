import { makeAutoObservable, autorun, runInAction } from "mobx";
import { User } from "../models/User";
export class AppStore {

  count = 0;

  users: User[] = [];

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

  async fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    runInAction(() => {
      this.users = data;
    });

  }

}


