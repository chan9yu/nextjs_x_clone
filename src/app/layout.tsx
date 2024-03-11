import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import '../styles/reset.css';
import '../styles/global.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'nextjs boiler plate',
	description: 'nextjs boiler plate repository',
	icons: [
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon.ico'
		}
	]
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ko">
			<body className={openSans.className}>{children}</body>
		</html>
	);
}
