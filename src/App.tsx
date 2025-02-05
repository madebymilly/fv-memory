import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { css } from '../styled-system/css';

gsap.registerPlugin(useGSAP);

function App() {
	const button = useRef()

	useGSAP(
		() => {
		  // or refs...
		  gsap.to(button.current, { rotation: "-=360", duration: 3,  repeat: -1 });
		},
		{ scope: button.current }
	 );

	return (
		<div>
			<h1  className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'red.300' })}>Hello 🐼!</h1>
			<button ref={button} className={css({ border: '1px solid blue' })}>Button</button>
		</div>
  )
}

export default App;
