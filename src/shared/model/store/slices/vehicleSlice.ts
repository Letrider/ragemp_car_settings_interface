import { StateCreator } from "zustand";

export interface VehicleSlice {
  engineOn: boolean;
  seatbeltOn: boolean;
  lights: "off" | "low" | "high";
  doors: Record<string, boolean>;
  windows: Record<string, boolean>;

  toggleEngine: () => void;
  toggleSeatbelt: () => void;
  setLights: (mode: "off" | "low" | "high") => void;
  toggleDoor: (door: string) => void;
  toggleWindow: (win: string) => void;
}

export const createVehicleSlice: StateCreator<VehicleSlice> = (set, get) => ({
  engineOn: false,
  seatbeltOn: false,
  lights: "off",
  doors: { frontLeft: false, frontRight: false, rearLeft: false, rearRight: false, hood: false, trunk: false },
  windows: { frontLeft: false, frontRight: false, rearLeft: false, rearRight: false },

  toggleEngine: () => set((s) => ({ engineOn: !s.engineOn })),
  toggleSeatbelt: () => set((s) => ({ seatbeltOn: !s.seatbeltOn })),
  setLights: (mode) => set({ lights: mode }),
  toggleDoor: (door) => set((s) => ({ doors: { ...s.doors, [door]: !s.doors[door] } })),
  toggleWindow: (win) => set((s) => ({ windows: { ...s.windows, [win]: !s.windows[win] } })),
});
