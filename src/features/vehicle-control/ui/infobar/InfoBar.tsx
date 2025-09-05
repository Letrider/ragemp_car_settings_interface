import styles from "./InfoBar.module.scss";

type InfoBarProps = {
	label: string;
	active: boolean;
	onClick?: () => void;
	Icon: React.ComponentType<{ fill?: string; }>;
};

export const InfoBar = ({ label, active, onClick, Icon }: InfoBarProps) => {
	return (
		<div
			className={`${styles.infoBar} ${active ? styles.infoBarOn : styles.infoBarOff}`}
			onClick={onClick}
		>
			<div className={`${styles.icon} ${active ? styles.active : ""}`}>
				<Icon fill={active ? "#43E748" : "#E7434F"} />
			</div>
			<p>{label}</p>
		</div>
	);
};
