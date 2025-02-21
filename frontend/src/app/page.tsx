import Cover from '@/components/layout/home/cover/Cover';
import Chart from '@/components/layout/home/chart/Chart';
import Advantages from '@/components/layout/home/advantages/Advantages';
import Benefit from '@/components/layout/home/benefit/Benefit';
import Cards from '@/components/layout/home/cards/Cards';
import Application from '@/components/layout/home/application/Application';

import style from './page.module.scss'

export default function Home() {
	return (
		<main className={`${style['main']}`}>
			<Cover />
			<Chart />
			<Advantages />
			<Benefit />
			<Cards />
			<Application />
		</main>
	);
}
