import { createContext, useContext } from "react";
import SkillStore from "./skillStore";

interface Store {
    skillStore: SkillStore;
}

export const store: Store = {
    skillStore: new SkillStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}