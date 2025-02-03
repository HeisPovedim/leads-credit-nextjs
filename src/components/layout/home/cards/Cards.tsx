import style from './Cards.module.scss';

export default function Cards() {
	return (
		<section className={`${style['cards']} container`}>
			<div className={`${style['cards__container']}`}>
				<div className={`${style['cards__items']} flex flex-wrap justify-center gap-[17px]`}>
					<div className={`${style['cards__item']}`}>
						<h3 className={`${style['cards__item-title']}`}>Аналитика и отчетность</h3>
						<p className={`${style['cards__item-description']}`}>Можно отслеживать эффективность каждого канала</p>
					</div>
					<div className={`${style['cards__item']}`}>
						<h3 className={`${style['cards__item-title']}`}>Интеграция с CRM</h3>
						<p className={`${style['cards__item-description']}`}>Можно отслеживать эффективность каждого канала</p>
					</div>
					<div className={`${style['cards__item']}`}>
						<h3 className={`${style['cards__item-title']}`}>Квалификация лидов</h3>
						<p className={`${style['cards__item-description']}`}>Можно отслеживать эффективность каждого канала</p>
					</div>
				</div>
			</div>
		</section>
	);
}
