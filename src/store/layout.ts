import { create } from 'zustand';

interface LayoutState {
  collapsed: boolean;
  toggle: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  collapsed: false,
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
})); 