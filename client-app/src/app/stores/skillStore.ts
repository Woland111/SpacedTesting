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
  setEditMode = (editMode: boolean) => (this.isInEditMode = editMode);
  selectSkill = (skill: Skill | null) => (this.selectedSkill = skill);
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
  setIsSaving = (isSaving: boolean) => (this.isSaving = isSaving);

  openForm = (skill: Skill | null) => {
    this.selectSkill(skill);
    this.setEditMode(true);
  };

  closeForm = () => {
    this.setEditMode(false);
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

  updateSkill = async (skill: Skill) => {
    this.setIsSaving(true);
    try {
      await skillsApi.update(skill);
      this.setSkills([...this.skills.filter((s) => s.id !== skill.id), skill]);
      this.setEditMode(false);
      this.selectSkill(skill);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsSaving(false);
    }
  };

  deleteSkill = async (id: string) => {
    this.setIsSaving(true);
    try {
      await skillsApi.delete(id);
      this.setSkills([...this.skills.filter((s) => s.id !== id)]);
      this.selectSkill(null);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsSaving(false);
    }
  };
}
