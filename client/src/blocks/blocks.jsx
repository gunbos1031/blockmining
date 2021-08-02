import React from 'react';
import styles from './blocks.module.css';
import Block from '../block/block';

const Blocks = ({ blocks }) => {
  return (
	<>
	<div>
		  <h2>Blocks</h2>
	</div>
	<ul className={styles.list}>
		{blocks.map(block => (
			<li>
				  <Block block={block} />
			</li>
		))}
	</ul>
	</>
  );
}

export default Blocks;