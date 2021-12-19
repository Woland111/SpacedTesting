import { makeAutoObservable, makeObservable, observable } from 'mobx';
import skillsApi from '../api/agent';
import { Skill } from '../models/skill';

export default class SkillStore {
  skills: Skill[] = [];
  isInEditMode: boolean = false;
  selectedSkill: Skill | null = null;
  isLoading: boolean = false;
  isSaving: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSkills = (skills: Skill[]) => (this.skills = skills);
  setIsInEditMode = (editMode: boolean) => (this.isInEditMode = editMode);
  setSelectedSkill = (skill: Skill | null) => (this.selectedSkill = skill);
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
  setIsSaving = (isSaving: boolean) => (this.isSaving = isSaving);
  openForm = (skill: Skill | null) => {
    this.selectedSkill = skill;
    this.isInEditMode = true;
  };

  loadSkills = async () => {
    this.setIsLoading(true);
    try {
      this.setSkills(await skillsApi.readAll());
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  deleteSkill = async (id: string) => {
    this.setIsSaving(true);
    try {
      await skillsApi.delete(id);
      this.setSkills([...this.skills.filter((s) => s.id !== id)]);
      this.setSelectedSkill(null);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsSaving(false);
    }
  };
}
