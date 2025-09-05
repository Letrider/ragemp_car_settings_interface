import Image from "next/image";
import { useVehicleControl } from "../../../model/useVehicleControl";
import styles from "./WindowsTab.module.scss";
import car from '@shared/assets/car-control/car-scene.png';
import SvgCarWindow from "@/shared/ui/icons/CarWindow";

export const WindowsTab = () => {
	const { windows, toggleWindow } = useVehicleControl();

	return (
		<section className={styles.carWrapper}>
			<Image src={car} className={styles.carImage} alt="Car Scene" />

			<SvgCarWindow
				className={`${styles.window} ${styles.frontLeft} ${windows.frontLeft ? styles.open : styles.closed}`}
				onClick={() => toggleWindow("frontLeft")}
			/>

			<SvgCarWindow
				className={`${styles.window} ${styles.frontRight} ${windows.frontRight ? styles.open : styles.closed}`}
				onClick={() => toggleWindow("frontRight")}
			/>

			<SvgCarWindow
				className={`${styles.window} ${styles.rearLeft} ${windows.rearLeft ? styles.open : styles.closed}`}
				onClick={() => toggleWindow("rearLeft")}
			/>

			<SvgCarWindow
				className={`${styles.window} ${styles.rearRight} ${windows.rearRight ? styles.open : styles.closed}`}
				onClick={() => toggleWindow("rearRight")}
			/>
		</section>
	);
};
