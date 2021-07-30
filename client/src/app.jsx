import React from 'react';
import styles from './app.module.css';
import Header from './header/header';
import Payload from './payload/payload';
import Blocks from './blocks/blocks';

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Payload />
			<Blocks />
		</div>
	)
}

export default App;
