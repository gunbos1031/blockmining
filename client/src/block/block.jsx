import React from 'react';
import styles from './block.module.css';

const Block = ({ block }) => {
	const {
		hash,
		prevHash,
		payload,
		timestamp,
		nonce,
		difficulty,
		height
	} = block;
	return (
		<div className={styles.container}>
			<section className={styles.block}>
				<ul className={styles.list}>
					<li className={`${styles.hash} ${styles.data}`}>
						<span className={styles.inf}>Hash</span>: {hash}
					</li>
					<li className={`${styles.prevHash} ${styles.data}`}>
						<span className={styles.inf}>PrevHash</span>: {prevHash}
					</li>
					<li className={`${styles.payload} ${styles.data}`}>
						<span className={styles.inf}>Message</span>: {payload}
					</li>
					<li className={`${styles.timestamp} ${styles.data}`}>
						<span className={styles.inf}>Timestamp</span>: {timestamp}
					</li>
					<li className={`${styles.nonce} ${styles.data}`}>
						<span className={styles.inf}>Nonce</span>: {nonce}
					</li>
					<li className={`${styles.difficulty} ${styles.data}`}>
						<span className={styles.inf}>Difficulty</span>: {difficulty}
					</li>
					<li className={`${styles.height} ${styles.data}`}>
						<span className={styles.inf}>Height</span>: {height}
					</li>
				</ul>
			</section>
			<hr />
		</div>
	)
}

export default Block;