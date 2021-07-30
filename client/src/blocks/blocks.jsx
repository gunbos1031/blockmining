import React from 'react';
import styles from './blocks.module.css';
import Block from '../block/block';

const Blocks = () => {
  const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];

  return (
	<>
	<div>
		  <h2>Blocks</h2>
	</div>
	<ul className={styles.list}>
		{animals.map(animal => (
			<li>
				  <Block />
			</li>
		))}
	</ul>
	</>
  );
}

export default Blocks;