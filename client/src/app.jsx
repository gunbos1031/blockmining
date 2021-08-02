import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Header from './header/header';
import Payload from './payload/payload';
import Blocks from './blocks/blocks';

const App = ({ API }) => {
	const [blocks, setBlocks] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const sign = (ok) => {
		setLoading(ok)
	}
	
	useEffect(() => {	
		const getBlocks = async () => {
			if (loading) {
				const resp = await API.get();
				if (resp == null) {
					setLoading(false);
					return;
				}

				setBlocks(blocks => {
					return resp;
				});
				setLoading(false);
			}
		}
		getBlocks();
	}, [loading, API]);
	
	return (
		<div className={styles.container}>
			<Header />
			<Payload API={API} sign={sign} />
			<Blocks blocks={blocks} />
		</div>
	)
}

export default App;
