import { makeAutoObservable } from 'mobx';
import skillsApi from '../api/agent';
import { Skill } from '../models/skill';

export default class SkillStore {
  skillsMap: Map<string, Skill> = new Map<string, Skill>();
  isInEditMode: boolean = false;
  selectedSkill: Skill | null = null;
  isLoading: boolean = true;
  isSaving: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setEditMode = (editMode: boolean) => (this.isInEditMode = editMode);
  selectSkill = (skill: Skill | null) => (this.selectedSkill = skill);
  setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
  setIsSaving = (isSaving: boolean) => (this.isSaving = isSaving);
  setSkillInMap = (id: string, skill: Skill) => this.skillsMap.set(id, skill);

  get skillsSortedByCreationDate() {
    return Array.from(this.skillsMap.values()).sort(
      (a, b) =>
        Date.parse(a.creationTimestamp) - Date.parse(b.creationTimestamp)
    );
  }

  loadSkills = async () => {
    this.setIsLoading(true);
    try {
      (await skillsApi.readAll()).forEach((s) => this.setSkillInMap(s.id, s));
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  loadSkill = async (id: string) => {
    let skill = this.skillsMap.get(id);
    if (skill) {
      this.selectSkill(skill);
      return this.selectedSkill;
    } else {
      this.setIsLoading(true);
      try {
        this.selectSkill(await skillsApi.readOne(id));
        return this.selectedSkill;
      } catch (error) {
        console.log(error);
      } finally {
        this.setIsLoading(false);
      }
    }
  };

  createSkill = async (skill: Skill) => {
    this.setIsSaving(true);
    try {
      await skillsApi.create(skill);
      this.skillsMap.set(skill.id, skill);
      this.setEditMode(false);
      this.selectSkill(skill);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsSaving(false);
    }
  };

  updateSkill = async (skill: Skill) => {
    this.setIsSaving(true);
    try {
      await skillsApi.update(skill);
      this.skillsMap.set(skill.id, skill);
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
      this.skillsMap.delete(id);
      this.selectSkill(null);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsSaving(false);
    }
  };
}
