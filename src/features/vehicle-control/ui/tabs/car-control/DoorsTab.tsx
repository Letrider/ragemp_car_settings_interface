import Image from "next/image";
import { useVehicleControl } from "../../../model/useVehicleControl";
import styles from "./DoorsTab.module.scss";
import carScene from '@shared/assets/car-control/car-scene.png';
import SvgCarHood from "@/shared/ui/icons/CarHood";
import SvgCarTrunk from "@/shared/ui/icons/CarTrunk";
import { CarDoorLeftBack, CarDoorBackRight, CarDoorLeftTop, CarDoorRightTop } from "@/shared/ui/icons";

export const DoorsTab = () => {
	const { doors, toggleDoor } = useVehicleControl();

	return (
		<section className={styles.container}>
			<div className={styles.carWrapper}>
				<Image src={carScene} alt="Car top view" className={styles.carImage} />

				<CarDoorRightTop
					className={`${styles.door} ${styles.frontLeft} ${doors.frontLeft ? styles.open : styles.closed}`}
					onClick={() => toggleDoor("frontLeft")}
				/>

				<CarDoorBackRight
					className={`${styles.door} ${styles.frontRight} ${doors.frontRight ? styles.open : styles.closed}`}
					onClick={() => toggleDoor("frontRight")}
				/>
				<CarDoorLeftTop
					className={`${styles.door} ${styles.rearLeft} ${doors.rearLeft ? styles.open : styles.closed}`}
					onClick={() => toggleDoor("rearLeft")}
				/>
				<CarDoorLeftBack
					className={`${styles.door} ${styles.rearRight} ${doors.rearRight ? styles.open : styles.closed}`}
					onClick={() => toggleDoor("rearRight")}
				/>

				<SvgCarHood
					className={`${styles.door} ${styles.hood} ${doors.hood ? styles.open : styles.closed}`}
					onClick={() => toggleDoor("hood")}
				/>


				<SvgCarTrunk
					className={`${styles.door} ${styles.trunk} ${doors.trunk ? styles.open : styles.closed}`}
					onClick={() => toggleDoor("trunk")}
				/>

			</div>
		</section>
	);
};
