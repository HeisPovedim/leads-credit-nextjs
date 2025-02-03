import Image from 'next/image';

// STYLES
import style from './Advantages.module.scss';

// ASSETS
import adv_1 from './img/advantages-1.png';
import adv_2 from './img/advantages-2.png';
import adv_3 from './img/advantages-3.png';

export default function Advantages() {
	return (
		<section className={`${style['advantages']} container`}>
			<h2 className={`${style['advantages__title']}`}>Платформу для автоматизации включает в себя:</h2>
			<div className={`${style['advantages__items']} flex justify-center flex-wrap gap-[20px]`}>
				<div className={`${style['advantages__item']}`}>
					<Image src={adv_1} alt='adv_1' />
					<h3 className={`${style['advantages__item-title']}`}>Автоматический сбор лидов</h3>
					<p className={`${style['advantages__item-description']}`}>
						Мы используем разные каналы для привлечения потенциальных клиентов: поисковую оптимизацию (SEO), контекстную рекламу,
						социальные сети, email-маркетинг и т.д. 
					</p>
				</div>
				<div className={`${style['advantages__item']}`}>
					<Image src={adv_2} alt='adv_2' />
					<h3 className={`${style['advantages__item-title']}`}>Квалификация лидов</h3>
					<p className={`${style['advantages__item-description']}`}>
						Мы отфильтровываем нецелевых пользователей, передавая вам только тех клиентов, которые готовы к дальнейшему взаимодействию или
						покупке.
					</p>
				</div>
				<div className={`${style['advantages__item']}`}>
					<Image src={adv_3} alt='adv_3' />
					<h3 className={`${style['advantages__item-title']}`}>Аналитика и отчетность</h3>
					<p className={`${style['advantages__item-description']}`}>
						С помощью подробных отчетов и аналитики вы можете отслеживать эффективность каждого канала лидогенерации, корректировать
						стратегии и повышать ROI.
					</p>
				</div>
			</div>
		</section>
	);
}
