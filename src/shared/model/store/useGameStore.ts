import { create } from "zustand";
import { createVehicleSlice, VehicleSlice } from "./slices/vehicleSlice";
import { createMusicSlice, MusicSlice } from "./slices/musicSlice";
import { createModeSlice, ModeSlice } from "./slices/modeSlice";

/** 
 * @description 
 *	При необходимости можно вводить глобальные стейты тут, например как погода, время. Они могут подтягиваться из любой точки приложения. Но, в глобальном стейте доступны и другие слайсы. Это сделано только с точки зрения приемлимой архитектуры.
 */

type GameState =
	VehicleSlice &
	MusicSlice &
	ModeSlice;

interface GameSlice {
	weather: string;
	time: string;
	mapMark: string;

	setWeather: (weather: string) => void;
	setTime: (time: string) => void;
}

export const useGameStore = create<GameState & GameSlice>((set, get, api) => ({
	...createVehicleSlice(set, get, api),
	...createMusicSlice(set, get, api),
	...createModeSlice(set, get, api),

	weather: "+16°C, Sunny",
	time: "12:00 30.07.2025",
	mapMark: "Los Santos, 4 980 m",

	setWeather: (weather) => set({ weather }),
	setTime: (time) => set({ time }),
}));

