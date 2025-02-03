import Image from 'next/image';

// STYLES
import style from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={`${style['footer']} container flex flex-wrap items-center justify-between gap-[20px]`}>
			<div className={`${style['footer__logo']}`}>
				<Image src='/logo.png' width={304} height={62} alt='logo' />
			</div>
			<p className={`${style['footer__phone']}`}>8-916-686-47-02</p>
		</footer>
	);
}
