'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// COMPONENTS
import Button from '@/components/ui/button/Button';

// STYLES
import style from './Chart.module.scss';

// ASSETS
import chartImg from './img/chart.png';

export default function Chart() {
	const [isExpanded, setIsExpanded] = useState(false);

	const shortText = 'Мы предлагаем высокоэффективное решение для бизнеса, которое помогает не просто привлекать трафик, а привлекать';
	const fullText =
		'Мы предлагаем высокоэффективное решение для бизнеса, которое помогает не просто привлекать трафик, а привлекать целевых клиентов, готовых к покупке. Наш подход основан на глубоком анализе рынка и потребностей вашей аудитории.';

	return (
		<section className={`${style['chart']} container`}>
			<div className={`${style['chart__container']} flex items-center justify-between gap-[90px]`}>
				<div className={`${style['chart__image']} flex justify-center w-1/2`}>
					<Image src={chartImg} width={535} height={354} alt='chart' />
				</div>
				<div className={`${style['chart__content']} w-1/2`}>
					<h1 className={`${style['chart__title']}`}>Привлечение качественных клиентов</h1>
					<p className={`${style['chart__description']}`}>С максимальной отдачей</p>
					<p className={`${style['chart__text']}`}>
						{isExpanded ? fullText : shortText}
						<button onClick={() => setIsExpanded(!isExpanded)} className={style['chart__more-btn']}>
							{isExpanded ? '' : ' подробнее...'}
						</button>
					</p>
					<Link href='#application'>
						<Button className={`${style['chart__button']}`} variant='aqua-oval'>
							Оставить заявку
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
