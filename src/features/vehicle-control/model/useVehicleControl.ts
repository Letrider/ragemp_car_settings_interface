import { create } from "zustand";
import { VehicleState } from "@/entities/vehicle/model/types";

export const useVehicleControl = create<VehicleState & {
	toggleEngine: () => void;
	toggleSeatbelt: () => void;
	setLights: (mode: VehicleState["lights"]) => void;
	toggleDoor: (door: keyof VehicleState["doors"]) => void;
	toggleWindow: (window: keyof VehicleState["windows"]) => void;
	toggleHazards: () => void;
	setMode: (mode: VehicleState["mode"]) => void;
	mediaNext: () => void;
	mediaPrev: () => void;
	mediaToggle: () => void;
}>((set, get) => ({
	engineOn: false,
	seatbeltOn: false,
	lights: "off",
	windows: {
		frontLeft: false,
		frontRight: false,
		rearLeft: false,
		rearRight: false,
	},
	doors: {
		frontLeft: false,
		frontRight: false,
		rearLeft: false,
		rearRight: false,
		hood: false,
		trunk: false,
	},
	hazards: false,
	mode: "normal",
	media: {
		currentTrack: 0,
		isPlaying: false,
		currentTime: 73,
		playlist: [
			{
				artist: 'Eminem',
				cover: 'https://ntvb.tmsimg.com/assets/assets/182420_v9_bc.jpg',
				duration: 230,
				title: 'Lose Yourlife'
			}
		],

	},

	toggleEngine: () => {
		const newState = !get().engineOn;
		set({ engineOn: newState });
		mp.trigger("client:vehicle:toggleEngine", newState);
	},

	toggleSeatbelt: () => {
		const newState = !get().seatbeltOn;
		set({ seatbeltOn: newState });
		mp.trigger("client:vehicle:toggleSeatbelt", newState);
	},

	setLights: (mode) => {
		set({ lights: mode });
		mp.trigger("client:vehicle:setLights", mode);
	},

	toggleDoor: (door) => {
		const newState = !get().doors[door];
		set((s) => ({ doors: { ...s.doors, [door]: newState } }));
		mp.trigger("client:vehicle:toggleDoor", door, newState);
	},

	toggleWindow: (window) => {
		const newState = !get().windows[window];
		set((s) => ({ windows: { ...s.windows, [window]: newState } }));
		mp.trigger("client:vehicle:toggleWindow", window, newState);
	},

	toggleHazards: () => {
		const newState = !get().hazards;
		set({ hazards: newState });
		mp.trigger("client:vehicle:toggleHazards", newState);
	},

	setMode: (mode) => {
		set({ mode });
		mp.trigger("client:vehicle:setMode", mode);
	},

	mediaNext: () => {
		const s = get();
		const nextTrack = (s.media.currentTrack + 1) % s.media.playlist.length;
		set({ media: { ...s.media, currentTrack: nextTrack } });
		mp.trigger("client:vehicle:mediaNext", nextTrack);
	},

	mediaPrev: () => {
		const s = get();
		const prevTrack = (s.media.currentTrack - 1 + s.media.playlist.length) % s.media.playlist.length;
		set({ media: { ...s.media, currentTrack: prevTrack } });
		mp.trigger("client:vehicle:mediaPrev", prevTrack);
	},

	mediaToggle: () => {
		const newState = !get().media.isPlaying;
		set((s) => ({ media: { ...s.media, isPlaying: newState } }));
		mp.trigger("client:vehicle:mediaToggle", newState);
	},
}));
