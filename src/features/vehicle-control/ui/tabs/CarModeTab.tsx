import { useVehicleControl } from "../../model/useVehicleControl";
import styles from './CarModeTab.module.scss';

export const CarModeTab = () => {
	const { mode, setMode } = useVehicleControl();

	return (
		<section className={styles.container}>
			<h1>Car Mode</h1>
			<button className={`${styles.modeButton} ${mode === 'eco' ? styles.active : ""}`} onClick={() => setMode("eco")} disabled={mode === "eco"}>ECO Mode</button>
			<button className={`${styles.modeButton} ${mode === 'normal' ? styles.active : ""}`} onClick={() => setMode("normal")} disabled={mode === "normal"}>Normal Mode</button>
			<button className={`${styles.modeButton} ${mode === 'drift' ? styles.active : ""}`} onClick={() => setMode("drift")} disabled={mode === "drift"}>Drift Mode</button>
			<button className={`${styles.modeButton} ${styles.restoreButton}`} onClick={() => setMode("eco")}>Restore</button>
		</section>
	);
};
