import { useVehicleControl } from "../../../model/useVehicleControl";
import { InfoBar } from "@/features/vehicle-control/ui/infobar/InfoBar";
import { Switch } from "@/shared/ui/switch/Switch";
import SvgEngine from "@/shared/ui/icons/Engine";
import SvgLock from "@/shared/ui/icons/Lock";
import SvgSeat from "@/shared/ui/icons/Seat";
import SvgLightPrimary from "@/shared/ui/icons/LightPrimary";
import SvgLightSecondary from "@/shared/ui/icons/LightSecondary";
import SvgMark from "@/shared/ui/icons/Mark";
import styles from "./GeneralTab.module.scss";
import { useGameStore } from "@/shared/model/store/useGameStore";

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
				<InfoBar label="Engine" active={engineOn} onClick={toggleEngine} Icon={SvgEngine} />
				<InfoBar label="Lock" active={isCarClosed} Icon={SvgLock} />
				<InfoBar label="Seat" active={seatbeltOn} onClick={toggleSeatbelt} Icon={SvgSeat} />
				<InfoBar
					label="I. Lights"
					active={lights === "low" || lights === "high"}
					onClick={() => setLights("low")}
					Icon={SvgLightPrimary}
				/>
				<InfoBar
					label="Lights"
					active={lights === "high"}
					onClick={() => setLights("high")}
					Icon={SvgLightSecondary}
				/>
			</div>

			<div className={styles.carInfoBar}>
				<div className={styles.largeInfoBar}>
					<div className={styles.iconLarge}>
						<SvgMark />
					</div>
					<div className={styles.largeInfoBarTextContainer}>
						<p>{location}</p>
						<span>{routeLength}</span>
					</div>
				</div>

				<div className={styles.largeInfoBar}>
					<div className={styles.iconLarge}>
						<SvgMark />
					</div>
					<div className={styles.largeInfoBarTextContainer}>
						<p>Temperature</p>
						<span>{'89 °C'}</span>
					</div>
				</div>

				<div className={styles.largeInfoBar}>
					<div className={styles.iconLarge}>
						<SvgMark />
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
