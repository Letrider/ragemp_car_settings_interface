import React from 'react';
import styles from "./VehiclePanelHeader.module.scss";
import SvgClock from "@/shared/ui/icons/Clock";
import SvgCloudWeather from "@/shared/ui/icons/CloudWeather";
import { useGameStore } from "@/shared/model/store/useGameStore";

export const VehiclePanelHeader = () => {
	const weather = useGameStore((s) => s.weather);
	const time = useGameStore((s) => s.time);

	const [currentTime, date] = time.split(" ");
	const [temperature, condition] = weather.split(" ");

	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<h1 className={styles.headerTextPrimary}>Car <p className={styles.headerTextSecondary}>Settings</p></h1>
				<h2 className={styles.headerDescription}>
					Control various aspects of your vehicle including doors, windows, music, and other.
				</h2>
			</div>
			<div className={styles.headerRight}>
				<div className={styles.headerMiniContainer}>
					<SvgClock fill="#fff" fillOpacity={0.3} />
					<span>{currentTime}</span>
					<p>{date}</p>
				</div>
				<div className={styles.headerMiniContainer}>
					<SvgCloudWeather fill="#fff" />
					<span>{temperature}</span>
					<h3>{condition}</h3>
				</div>
			</div>
		</header>
	);
};
