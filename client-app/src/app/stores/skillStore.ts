import { makeAutoObservable, makeObservable, observable } from "mobx";
import { Skill } from "../models/skill";

export default class SkillStore {
  skills: Skill[] = [];
  isInEditMode: boolean = false;
  selectedSkill: Skill | null = null;
  isLoading: boolean = true;
  isSaving: boolean = false;
  
  constructor() {
      makeAutoObservable(this);
  }

  setSkills = (skills: Skill[]) => this.skills = skills;
  setIsInEditMode = (editMode: boolean) => this.isInEditMode = editMode;
  setSelectedSkill = (skill: Skill | null) => this.selectedSkill = skill;
  setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;
  setIsSaving = (isSaving: boolean) => this.isSaving = isSaving;
}