import { create } from 'zustand';

type Task = {
  id: string | number;
  text: string;
}

type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
}

export const useTastkStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text) => set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), text: text }]
  })),
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  }))
}))

// Store deixada como exemplo de como vamos gerenciar os estados globais.