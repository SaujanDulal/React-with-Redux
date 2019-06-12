import React from 'react';

function Rainbow(WrappedComponent) {
	const color = [ 'red', 'green', 'yellow', 'blue', 'orange', 'pink' ];
	const randomColor = color[Math.floor(Math.random() * color.length)];
	const className = `${randomColor}-text `;
	return (props) => {
		return (
			<div className={className}>
				<WrappedComponent {...props} />
			</div>
		);
	};
}

export default Rainbow;
