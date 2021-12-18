import { makeAutoObservable, makeObservable, observable } from "mobx";

export default class SkillStore {
  question = 'sample question';
  constructor() {
      makeAutoObservable(this);
  }
}