import React from 'react';
import styles from './block.module.css';

const Block = () => {
	return (
		<div className={styles.container}>
			<section className={styles.block}>
				<ul className={styles.list}>
					<li className={`${styles.hash} ${styles.data}`}>hash</li>
					<li className={`${styles.prevHash} ${styles.data}`}>prevHash</li>
					<li className={`${styles.payload} ${styles.data}`}>payload</li>
					<li className={`${styles.timestamp} ${styles.data}`}>timestamp</li>
					<li className={`${styles.nonce} ${styles.data}`}>nonce</li>
					<li className={`${styles.difficulty} ${styles.data}`}>difficulty</li>
					<li className={`${styles.height} ${styles.data}`}>height</li>
				</ul>
			</section>
			<hr />
		</div>
	)
}

export default Block;