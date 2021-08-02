import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Header from './header/header';
import Payload from './payload/payload';
import Blocks from './blocks/blocks';

const App = ({ API }) => {
	const [blocks, setBlocks] = useState(null)
	useEffect(() => {
		const data = API.get()
	})
	return (
		<div className={styles.container}>
			<Header />
			<Payload API={API} />
			<Blocks blocks={blocks} />
		</div>
	)
}

export default App;
