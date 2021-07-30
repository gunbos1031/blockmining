import React from 'react';
import styles from './payload.module.css';

const Payload = () => {
	return (
		<section className={styles.section}>
			<form action="/api/blocks" method="POST" className={styles.form}>
				<input 
					className={styles.data}
					type="text" 
					placeholder="Data for you Block"
					name="blockData"
					required
				/>
				<input 
					className={styles.diff}
					type="text" 
					placeholder="Difficulty for your Block" 
					name="blockDifficulty"
					required
				/>
				<button className={styles.submit}><i className="fas fa-fire"></i></button>
			</form>
		</section>
	)
}

export default Payload