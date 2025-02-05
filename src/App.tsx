import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { css } from '../styled-system/css';
import { randomize } from '../src/helpers.js';

gsap.registerPlugin(useGSAP);

const cards = randomize([
	{ text: 'plaatje 0', name: '0' },
	{ text: 'plaatje 1', name: '1' },
	{ text: 'plaatje 2', name: '2' },
	{ text: 'plaatje 3', name: '3' },
	{ text: 'plaatje 0', name: '0' },
	{ text: 'plaatje 1', name: '1' },
	{ text: 'plaatje 2', name: '2' },
	{ text: 'plaatje 3', name: '3' }
]);

function App() {
	const button = useRef()

	const [clicked, setClicked] = useState([]);

	useGSAP(
		() => {
		  gsap.to(button.current, { rotation: "-=360", duration: 3,  repeat: -1 });
		},
		{ scope: button.current }
	);

	function handleClick(name) {
		console.log('clicked on', name);

		setClicked(prevState => {
			const newState = [...prevState, { name: name }];
			return newState;
		});

		console.log('clicked', clicked);
	}

	return (
		<div className={css({
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			h: '100vh',
			bg: 'gray.100',
			p: '2rem'
		})}>
			<h1 className={css({
				fontSize: '2xl',
				fontWeight: 'bold',
				color: 'blue.500',
				marginBlockEnd: '1rem'
			})}>
				Memory met React, Panda 🐼 en GSAP 🧦
			</h1>
			<div className={css({
				bg: 'gray.300',
				p: '1rem',
				display: 'grid',
				gridTemplateColumns: 'repeat(4, 1fr)',
				gap: '1rem',
			})}>
				{cards.map((card, index) => (
					<div
						key={index}
						onClick={() => handleClick(card.name)}
						className={css({
							bg: 'gray.500',
							p: '1rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							aspectRatio: '1/1',
							cursor: 'pointer',
							color: 'white'
						})}
					>{card.text}</div>
				))}
			</div>
		</div>
  )
}

export default App;


