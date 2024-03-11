import Link from 'next/link';

import { APP_URL } from '../../../constants/route-constants';
import LogoIcon from '../../common/icons/LogoIcon';
import styles from './Main.module.css';

export default function Main() {
	return (
		<>
			<div className={styles.left}>
				<LogoIcon />
			</div>
			<div className={styles.right}>
				<h1>지금 일어나고 있는 일</h1>
				<h2>지금 가입하세요.</h2>
				<Link href={APP_URL.SIGNUP} className={styles.signup}>
					계정 만들기
				</Link>
				<h3>이미 트위터에 가입하셨나요?</h3>
				<Link href={APP_URL.LOGIN} className={styles.login}>
					로그인
				</Link>
			</div>
		</>
	);
}
