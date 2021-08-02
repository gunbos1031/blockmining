import React, { useState, useRef } from 'react';
import styles from './payload.module.css';

const Payload = ({ API, sign }) => {
	const [loading, setLoading] = useState(false);
	const blockDataRef = useRef();
	const blockDiffRef = useRef();
	const onSubmit = async (event) => {
		event.preventDefault();
		const blockData = blockDataRef.current.value;
		const blockDifficulty = blockDiffRef.current.value;
		const formData = {
			blockData,
			blockDifficulty,
		}
		setLoading(true);
		await API.post(formData);
		setLoading(false);
		sign(true)
		blockDataRef.current.value = "";
		blockDiffRef.current.value = "";
	}
	
	return (
		<section className={styles.section}>
			<form 
				className={styles.form}
				onSubmit={onSubmit}
				method="POST"
			>
				<input
					ref={blockDataRef}
					className={styles.data}
					type="text" 
					placeholder="Data for you Block"
					name="blockData"
					required
				/>
				<input 
					ref={blockDiffRef}
					className={styles.diff}
					type="text" 
					placeholder="Difficulty for your Block" 
					name="blockDifficulty"
					required
				/>
				{!loading && <button className={styles.submit}><i className="fas fa-fire"></i></button>}
				{loading && <div className={styles.loading}></div>}
			</form>
		</section>
	)
}

export default Payload