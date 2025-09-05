'use client';
import { useEffect } from "react";
import { useVehicleControl } from "./useVehicleControl";
import { VehicleState } from "@/entities/vehicle/model/types";


export const VehicleEventListener = () => {
	const set = useVehicleControl.setState;

	useEffect(() => {
		const updateEngine = (state: boolean) => set({ engineOn: state });
		const updateSeatbelt = (state: boolean) => set({ seatbeltOn: state });
		const updateLights = (mode: VehicleState["lights"]) => set({ lights: mode });
		const updateHazards = (state: boolean) => set({ hazards: state });

		mp.events.add("client:vehicle:updateEngine", updateEngine);
		mp.events.add("client:vehicle:updateSeatbelt", updateSeatbelt);
		mp.events.add("client:vehicle:updateLights", updateLights);
		mp.events.add("client:vehicle:updateHazards", updateHazards);

		return () => {
			mp.events.remove("client:vehicle:updateEngine");
			mp.events.remove("client:vehicle:updateSeatbelt");
			mp.events.remove("client:vehicle:updateLights");
			mp.events.remove("client:vehicle:updateHazards");
		};
	}, [set]);

	return null;
};
