import { makeAutoObservable, makeObservable, observable } from "mobx";
import skillsApi from "../api/agent";
import { Skill } from "../models/skill";

export default class SkillStore {
  skills: Skill[] = [];
  isInEditMode: boolean = false;
  selectedSkill: Skill | null = null;
  isLoading: boolean = false;
  isSaving: boolean = false;
  
  constructor() {
      makeAutoObservable(this);
  }

  loadSkills = async () => {
    this.setIsLoading(true);
    try {
      this.skills = await skillsApi.readAll();
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  setSkills = (skills: Skill[]) => this.skills = skills;
  setIsInEditMode = (editMode: boolean) => this.isInEditMode = editMode;
  setSelectedSkill = (skill: Skill | null) => this.selectedSkill = skill;
  setIsLoading = (isLoading: boolean) => this.isLoading = isLoading;
  setIsSaving = (isSaving: boolean) => this.isSaving = isSaving;
  openForm = (skill: Skill | null) => {
    this.selectedSkill = skill;
    this.isInEditMode = true;
  }
}