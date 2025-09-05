'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarControlTab } from "./tabs/CarControlTab";
import { MusicTab } from "./tabs/MusicTab";
import { CarModeTab } from "./tabs/CarModeTab";
import styles from "./VehiclePanel.module.scss";
import { VehiclePanelHeader } from "./vehicle-panel-header/VehiclePanelHeader";
import { Main } from "./main/main";
import SvgCarControl from "@/shared/ui/icons/CarControl";
import SvgMusic from "@/shared/ui/icons/Music";
import SvgCarMode from "@/shared/ui/icons/CarMode";
import SvgCarClose from "@/shared/ui/icons/CarMediaClose";

const tabs = [
	{ id: "car", label: "Car Control", Icon: SvgCarControl },
	{ id: "music", label: "Music", Icon: SvgMusic },
	{ id: "mode", label: "Car Mode", Icon: SvgCarMode },
];

const variants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
	transition: { duration: 0.3 }
};

export const VehiclePanel = () => {
	const [activeTab, setActiveTab] = useState<"car" | "music" | "mode">("music");

	const getFill = (tab: "car" | "music" | "mode") =>
		tab === activeTab ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)";

	return (
		<div className={styles.container}>
			<VehiclePanelHeader />

			<div className={styles.line} />

			<Main>
				<div className={styles.sidebar}>
					<div className={styles.panel}>
						{tabs.map(({ id, label, Icon }) => (
							<div
								key={id}
								className={`${styles.navigateButton} ${activeTab === id ? styles.active : ""}`}
								onClick={() => setActiveTab(id as "car" | "music" | "mode")}
							>
								<div className="iconWrapper">
									<Icon fill={getFill(id as "car" | "music" | "mode")} />
								</div>
								<p>{label}</p>
							</div>
						))}
					</div>
					<div className={styles.navigateButton}>
						<div className="iconWrapper">
							<SvgCarClose />
						</div>
						<p>Close Menu</p>
					</div>
				</div>

				<AnimatePresence mode="wait">
					{activeTab === "car" && (
						<motion.div
							key="car"
							className={styles.tabContent}
							{...variants}
						>
							<CarControlTab />
						</motion.div>
					)}
					{activeTab === "music" && (
						<motion.div
							key="music"
							className={styles.tabContent}
							{...variants}
						>
							<MusicTab />
						</motion.div>
					)}
					{activeTab === "mode" && (
						<motion.div
							key="mode"
							className={styles.tabContent}
							{...variants}
						>
							<CarModeTab />
						</motion.div>
					)}
				</AnimatePresence>
			</Main>
		</div>
	);
};
