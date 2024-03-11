import { PropsWithChildren, ReactNode } from 'react';
import styles from './layout.module.css';

type BeforeLoginLayoutProps = PropsWithChildren<{
	modal?: ReactNode;
}>;

export default function BeforeLoginLayout({ children, modal }: BeforeLoginLayoutProps) {
	return (
		<div className={styles.container}>
			{children}
			{modal}
		</div>
	);
}
