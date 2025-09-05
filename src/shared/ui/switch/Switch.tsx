import { motion } from "framer-motion";
import styles from "./Switch.module.scss";

type SwitchProps = {
	checked: boolean;
	onChange: () => void;
};

export const Switch = ({ checked, onChange }: SwitchProps) => {
	return (
		<div
			className={`${styles.switch} ${checked ? styles.on : ""}`}
			onClick={onChange}
		>
			<motion.div
				className={styles.thumb}
				layout
				transition={{ type: "spring", stiffness: 500, damping: 30 }}
			/>
		</div>
	);
};
