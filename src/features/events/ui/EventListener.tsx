'use client';
import { useEffect } from "react";
import { useGameStore } from "@/shared/model/store/useGameStore";

export const EventListener = () => {
	const setWeather = useGameStore((s) => s.setWeather);
	const setTime = useGameStore((s) => s.setTime);

	useEffect(() => {
		const updateWeather = (weather: string) => {
			setWeather(weather);
		};

		const updateTime = (time: string) => {
			setTime(time);
		};

		mp.events.add("client:updateWeather", updateWeather);
		mp.events.add("client:updateTime", updateTime);

		return () => {
			mp.events.remove("client:updateWeather");
			mp.events.remove("client:updateTime");
		};
	}, [setWeather, setTime]);

	return null;
};
