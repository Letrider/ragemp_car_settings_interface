export interface VehicleState {
	engineOn: boolean;
	seatbeltOn: boolean;
	lights: "off" | "low" | "high";
	windows: {
		frontLeft: boolean;
		frontRight: boolean;
		rearLeft: boolean;
		rearRight: boolean;
	};
	doors: {
		frontLeft: boolean;
		frontRight: boolean;
		rearLeft: boolean;
		rearRight: boolean;
		hood: boolean;
		trunk: boolean;
	};
	hazards: boolean;
	media: {
		playlist: { title: string; artist: string; duration: number; cover: string; }[];
		currentTime: number;
		currentTrack: number;
		isPlaying: boolean;
	};
	mode: "eco" | "normal" | "drift";
}
