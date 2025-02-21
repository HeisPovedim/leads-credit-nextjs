import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Buttons.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'aqua-oval' | 'green-oval';
	children: ReactNode;
	className?: string;
}

export default function Button({ variant = 'aqua-oval', children, className = '', ...rest }: IButton) {
	const getButtonClass = () => {
		switch (variant) {
			case 'aqua-oval':
				return styles['button-aqua-oval'];
			case 'green-oval':
				return styles['button-green-oval'];
			default:
				return styles['button-aqua-oval'];
		}
	};

	return (
		<button className={`${getButtonClass()} ${className}`} {...rest}>
			{children}
		</button>
	);
}
