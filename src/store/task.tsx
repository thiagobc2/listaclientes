import { create } from 'zustand';

type Task = {
  id: string | number;
  text: string;
}

type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
}

export const useTastkStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text: text }]
  }))
}))