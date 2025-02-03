'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// UI
import Button from '@/components/ui/button/Button';

// ASSETS
import benefitImg from './img/benefit.png';
import benefitImgMobile from './img/benefit-mobile.png';

// STYLES
import style from './Benefit.module.scss';

const CheckIcon = () => (
	<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<circle cx='16' cy='16' r='16' fill='#54BD95' />
		<path d='M11 15.4L14.9394 19L21 13' stroke='white' strokeWidth='2' />
	</svg>
);

const benefitItems = ['Надежность и точность данных', 'Глубокая аналитика', 'Профессиональная поддержка', 'Низкая стоимость лида'];

export default function Benefit() {
		const [isMobile, setIsMobile] = useState(false);

		useEffect(() => {
			const checkMobile = () => {
				setIsMobile(window.innerWidth <= 1062);
			};

			checkMobile();
			window.addEventListener('resize', checkMobile);

			return () => window.removeEventListener('resize', checkMobile);
		}, []);
	
	return (
		<section className={`${style['benefit']} container`}>
			<div className={`${style['benefit__container']} flex items-center justify-between gap-[30px]`}>
				<div className={`${style['benefit__content']} w-[44%]`}>
					<h2 className={`${style['benefit__title']}`}>Почему именно наша платформа?</h2>
					<ul className={`${style['benefit__items']} flex flex-col gap-[24px]`}>
						{benefitItems.map((item, index) => (
							<li key={index} className={`${style['benefit__item']}`}>
								<CheckIcon />
								<p className={`${style['benefit__item-description']}`}>{item}</p>
							</li>
						))}
					</ul>
					<Button className={`${style['benefit__button']}`} variant='aqua-oval'>
						Оставить заявку
					</Button>
				</div>
				<div className={`${style['benefit__image']} flex justify-end w-2/3`}>
					<Image src={isMobile ? benefitImgMobile : benefitImg} alt='benefit' />
				</div>
			</div>
		</section>
	);
}
