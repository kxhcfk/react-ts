import React, { FC } from 'react';

enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string;
	height?: string;
	variant?: CardVariant;
	onClick?: () => void;
	children?: React.ReactNode
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
	return (
		<div
			style={{ width, height, backgroundColor: 'gray' }}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Card;