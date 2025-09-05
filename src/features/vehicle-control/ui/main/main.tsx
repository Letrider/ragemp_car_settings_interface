import React from 'react';
import styles from "./main.module.scss";

export const Main = ({ children }) => {
	return (
		<div className={styles.main}>
			{children}
		</div>
	);
};
