'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// COMPONENTS
import Button from '@/components/ui/button/Button';
// STYLES
import style from './Header.module.scss';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className={`${style['header']} container flex items-center justify-between gap-[20px]`}>
			<div className={`${style['header__logo']}`}>
				<Image src='/logo.png' width={304} height={62} alt='logo' />
			</div>
			<p className={`${style['header__phone']}`}>8-916-686-47-02</p>
			<input
				type='checkbox'
				id='burger-checkbox'
				className={style['burger-checkbox']}
				checked={isMenuOpen}
				onChange={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<label className={style['burger']} htmlFor='burger-checkbox'></label>
			<nav className={`${style['header__nav']} ${isMenuOpen ? style.show : ''} flex-col items-center justify-center`}>
				<p className={`${style['header__nav-phone']}`}>8-916-686-47-02</p>
				<Link href='#application'>
					<Button className={`${style['header__nav-button']}`} variant='aqua-oval'>
						Оставить заявку
					</Button>
				</Link>
			</nav>
		</header>

	);
}
