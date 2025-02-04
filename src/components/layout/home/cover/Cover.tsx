'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// COMPONENTS
import Button from '@/components/ui/button/Button';

// STYLES
import style from './Cover.module.scss';

// ASSETS
import coverImgMobile from './img/cover-mobile.png';
import coverImg from './img/cover.png';

export default function Cover() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 900);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<section className={`${style['cover']} container`}>
			<div className={`${style['cover__container']} flex items-center justify-between gap-[24px]`}>
				<div className={`${style['cover__content']} w-1/2`}>
					<h1 className={`${style['cover__title']}`}>
						От клика
						<br /> до <span>контракта</span>
					</h1>
					<p className={`${style['cover__description']}`}>Лиды, которые работают</p>
					<p className={`${style['cover__description']}`}>
						Мы предлагаем высокоэффективное решение для бизнеса, которое помогает не просто привлекать трафик, а привлекать готовых к
						покупке клиентов.
					</p>
					<Link href='#application'>
						<Button className={`${style['cover__button']}`} variant='aqua-oval'>
							Оставить заявку
						</Button>
					</Link>
				</div>
				<div className={`${style['cover__image']} flex justify-center w-1/2`}>
					<Image src={isMobile ? coverImgMobile : coverImg} alt='cover' />
				</div>
			</div>
		</section>
	);
}
