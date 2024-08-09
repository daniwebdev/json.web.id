import { useState } from "react";
import { create } from "zustand";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodoStore {
    todos: any[];
    setTodos: (todos: any[]) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    setTodos: (todos) => set((state) => ({ ...state, todos: todos })),
  }))