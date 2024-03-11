import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';

import '../styles/reset.css';
import '../styles/global.css';
import Link from 'next/link';
import { APP_URL } from '../constants/route-constants';

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
			<body className={openSans.className}>
				<nav style={{ display: 'flex', gap: '8px', cursor: 'pointer' }}>
					<Link href={APP_URL.LOGIN}>LOGIN</Link>
					<Link href={APP_URL.SIGNUP}>SIGNUP</Link>
					<br />
					<Link href={APP_URL.COMPOSE_TWEET}>COMPOSE_TWEET</Link>
					<Link href={APP_URL.EXPLORE}>EXPLORE</Link>
					<Link href={APP_URL.HOME}>HOME</Link>
					<Link href={APP_URL.MESSAGES}>MESSAGES</Link>
					<Link href={APP_URL.SEARCH}>SEARCH</Link>
					<br />
					<Link href={'/asdasdadasdasd/asdasd'}>NOT FOUND</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
