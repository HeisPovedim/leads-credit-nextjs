import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

// LAYOUT
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';

// STYLES
import '@/assets/styles/globals.scss';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'leads.credit',
	description:
		'Мы предлагаем высокоэффективное решение для бизнеса, которое помогает не просто привлекать трафик, а привлекать готовых к покупке клиентов.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${montserrat.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
