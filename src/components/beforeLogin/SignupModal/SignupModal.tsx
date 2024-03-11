'use client';

import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { APP_URL } from '../../../constants/route-constants';
import CloseIcon from '../../common/icons/CloseIcon';
import styles from './SignupModal.module.css';

export default function SignupModal() {
	const router = useRouter();

	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');
	const [image, setImage] = useState('');
	const [imageFile, setImageFile] = useState<File>();

	const onClickClose = () => {
		router.back();
	};

	const onChangeId: ChangeEventHandler<HTMLInputElement> = e => {
		setId(e.target.value);
	};

	const onChangePassword: ChangeEventHandler<HTMLInputElement> = e => {
		setPassword(e.target.value);
	};

	const onChangeNickname: ChangeEventHandler<HTMLInputElement> = e => {
		setNickname(e.target.value);
	};

	const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = e => {
		e.target.files && setImageFile(e.target.files[0]);
	};

	const onSubmit: FormEventHandler = e => {
		e.preventDefault();
		fetch('http://localhost:9090/api/users', {
			method: 'post',
			body: JSON.stringify({
				id,
				nickname,
				image,
				password
			}),
			credentials: 'include'
		})
			.then((response: Response) => {
				console.log(response.status);
				if (response.status === 200) {
					router.replace(APP_URL.HOME);
				}
			})
			.catch(err => {
				console.error(err);
			});
	};

	return (
		<>
			<div className={styles.modalBackground}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<button className={styles.closeButton} onClick={onClickClose}>
							<CloseIcon />
						</button>
						<div>계정을 생성하세요.</div>
					</div>
					<form>
						<div className={styles.modalBody}>
							<div className={styles.inputDiv}>
								<label className={styles.inputLabel} htmlFor="id">
									아이디
								</label>
								<input id="id" className={styles.input} type="text" placeholder="" value={id} onChange={onChangeId} />
							</div>
							<div className={styles.inputDiv}>
								<label className={styles.inputLabel} htmlFor="name">
									닉네임
								</label>
								<input
									id="name"
									className={styles.input}
									type="text"
									placeholder=""
									value={nickname}
									onChange={onChangeNickname}
								/>
							</div>
							<div className={styles.inputDiv}>
								<label className={styles.inputLabel} htmlFor="password">
									비밀번호
								</label>
								<input
									id="password"
									className={styles.input}
									type="password"
									placeholder=""
									value={password}
									onChange={onChangePassword}
								/>
							</div>
							<div className={styles.inputDiv}>
								<label className={styles.inputLabel} htmlFor="image">
									프로필
								</label>
								<input id="image" className={styles.input} type="file" accept="image/*" onChange={onChangeImageFile} />
							</div>
						</div>
						<div className={styles.modalFooter}>
							<button className={styles.actionButton} disabled>
								가입하기
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
