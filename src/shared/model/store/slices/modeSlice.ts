import { StateCreator } from "zustand";

export interface ModeSlice {
	mode: "eco" | "normal" | "drift";
	setMode: (mode: "eco" | "normal" | "drift") => void;
}

export const createModeSlice: StateCreator<ModeSlice> = (set) => ({
	mode: "normal",
	setMode: (mode) => set({ mode }),
});
