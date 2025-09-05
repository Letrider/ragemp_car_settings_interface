import { StateCreator } from "zustand";

export interface MusicSlice {
	media: {
		currentTrack: number;
		isPlaying: boolean;
		playlist: string[];
	};

	mediaNext: () => void;
	mediaPrev: () => void;
	mediaToggle: () => void;
}

export const createMusicSlice: StateCreator<MusicSlice> = (set, get) => ({
	media: {
		currentTrack: 0,
		isPlaying: false,
		playlist: ["Track 1", "Track 2", "Track 3"],
	},

	mediaNext: () => set((s) => ({
		media: {
			...s.media,
			currentTrack: (s.media.currentTrack + 1) % s.media.playlist.length
		}
	})),
	mediaPrev: () => set((s) => ({
		media: {
			...s.media,
			currentTrack: (s.media.currentTrack - 1 + s.media.playlist.length) % s.media.playlist.length
		}
	})),
	mediaToggle: () => set((s) => ({
		media: { ...s.media, isPlaying: !s.media.isPlaying }
	})),
});
