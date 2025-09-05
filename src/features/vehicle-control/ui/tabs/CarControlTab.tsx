import { useState } from "react";
import { WindowsTab } from "./car-control/WindowsTab";
import { DoorsTab } from "./car-control/DoorsTab";
import { GeneralTab } from "./car-control/GeneralTab";
import styles from "./CarControlTab.module.scss";

type SubTab = "windows" | "doors";

export const CarControlTab = () => {
	const [subTab, setSubTab] = useState<SubTab>("windows");

	return (
		<div className={styles.carControl}>
			<h1>Car Control</h1>
			<div className={styles.subHeader}>
				<div className={`${styles.navigateButton} ${subTab === 'windows' ? styles.active : ""}`} onClick={() => setSubTab("windows")}>Windows</div>
				<div className={`${styles.navigateButton} ${subTab === 'doors' ? styles.active : ""}`} onClick={() => setSubTab("doors")}>Doors</div>
			</div>

			<div className={styles.subContent}>
				{subTab === "windows" && <WindowsTab />}
				{subTab === "doors" && <DoorsTab />}
				<GeneralTab />
			</div>
		</div>
	);
};
