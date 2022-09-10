import { useState } from 'react';
import s from './StartedForm.module.scss';
import cn from 'classnames';

import Button from '../ui/Button/Button';

const StartedForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const onChangeHandler = (e) => {
		switch (e.target.name) {
			case 'name':
				setName(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value);
				break;
		}
	};

	return (
		<section className={cn(s.main, 'container')}>
			<div className={s.left__block}>
				<h2>Get started today!</h2>
				<p>
					Learn more about how you can save our planet&apos;s nature. From smart
					consumption to switching to renewable energy, each of us can do our
					part to save the planet.
				</p>
			</div>

			<form className={s.form}>
				<h3>Log in</h3>
				<input
					value={name}
					onChange={onChangeHandler}
					type="text"
					name="name"
					placeholder="Name"
					className={s.name}
				/>
				<input
					value={email}
					onChange={onChangeHandler}
					type="text"
					name="email"
					placeholder="Email"
				/>
				<Button className={s.button}>Book a demo</Button>
			</form>
		</section>
	);
};

export default StartedForm;
