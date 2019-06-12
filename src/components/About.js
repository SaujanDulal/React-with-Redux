import React from 'react';
import Rainbow from '../hoc/Rainbow';

function About() {
	return (
		<div className="container">
			<h4 className="center">About</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio, nostrum error quia esse sed enim
				neque doloremque, tempora rerum nobis veritatis! Voluptatum, temporibus minus illo reprehenderit laborum
				unde atque?
			</p>
		</div>
	);
}

export default Rainbow(About);
