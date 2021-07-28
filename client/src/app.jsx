import React from 'react';
import styles from './app.module.css';
import Header from './header/header'
import Payload from './payload/payload'

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Payload />
		</div>
	)
}

export default App;
