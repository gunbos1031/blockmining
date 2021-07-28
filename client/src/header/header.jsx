import React from 'react';
import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>BlockMining</h1>
		</header>
	)
}

export default Header