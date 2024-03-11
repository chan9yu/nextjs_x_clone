import { PropsWithChildren } from 'react';
import styles from './layout.module.css';

export default function BeforeLoginLayout({ children }: PropsWithChildren) {
	return <div className={styles.container}>{children}</div>;
}
