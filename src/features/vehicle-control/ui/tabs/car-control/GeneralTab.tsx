import { useVehicleControl } from "../../../model/useVehicleControl";
import { InfoBar } from "@/features/vehicle-control/ui/infobar/InfoBar";
import { Switch } from "@/shared/ui/switch/Switch";
import styles from "./GeneralTab.module.scss";
import { useGameStore } from "@/shared/model/store/useGameStore";
import { Emergency, Temperature, LightPrimary, LightSecondary, Seat, Lock, Engine, Mark } from "@/shared/ui/icons";

export const GeneralTab = () => {
	const mapMark = useGameStore((s) => s.mapMark);

	const {
		engineOn, toggleEngine,
		seatbeltOn, toggleSeatbelt,
		lights, setLights,
		hazards, toggleHazards,
		doors,
	} = useVehicleControl();

	const [location, routeLength] = mapMark.split(", ");

	const isCarClosed = Object.values(doors).every(Boolean);

	return (
		<section className={styles.container}>
			<div className={styles.carUtils}>
				<InfoBar label="Engine" active={engineOn} onClick={toggleEngine} Icon={Engine} />
				<InfoBar label="Lock" active={isCarClosed} Icon={Lock} />
				<InfoBar label="Seat" active={seatbeltOn} onClick={toggleSeatbelt} Icon={Seat} />
				<InfoBar
					label="I. Lights"
					active={lights === "low" || lights === "high"}
					onClick={() => setLights("low")}
					Icon={LightPrimary}
				/>
				<InfoBar
					label="Lights"
					active={lights === "high"}
					onClick={() => setLights("high")}
					Icon={LightSecondary}
				/>
			</div>

			<div className={styles.carInfoBar}>
				<div className={styles.largeInfoBar}>
					<div className={styles.iconLarge}>
						<Mark />
					</div>
					<div className={styles.largeInfoBarTextContainer}>
						<p>{location}</p>
						<span>{routeLength}</span>
					</div>
				</div>

				<div className={styles.largeInfoBar}>
					<div className={styles.iconLarge}>
						<Temperature />
					</div>
					<div className={styles.largeInfoBarTextContainer}>
						<p>Temperature</p>
						<span>{'89 °C'}</span>
					</div>
				</div>

				<div className={styles.largeInfoBar}>
					<div className={styles.iconLarge}>
						<Emergency />
					</div>
					<div className={styles.largeInfoBarTextContainer}>
						<p>Emergency</p>
						<Switch checked={hazards} onChange={toggleHazards} />
					</div>
				</div>
			</div>
		</section>
	);
};
