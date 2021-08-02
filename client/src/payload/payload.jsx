import React, { useRef } from 'react';
import styles from './payload.module.css';

const Payload = ({ API, sign }) => {
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
		await API.post(formData);
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
				<button className={styles.submit}><i className="fas fa-fire"></i></button>
			</form>
		</section>
	)
}

export default Payload