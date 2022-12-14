import { useState, useEffect } from 'react';
import s from './Intro.module.scss';
import cn from 'classnames';

import Button from '../ui/Button/Button';
import { ReactComponent as Headline } from '../../assets/Intro/headline.svg';
import { ReactComponent as Parrot } from '../../assets/Intro/parrot.svg';
import { ReactComponent as Card } from '../../assets/Intro/card.svg';
import { ReactComponent as CardIcon } from '../../assets/icons/card-icon.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';

const Intro = () => {
	const [value, setValue] = useState('');
	const [members, setMembers] = useState(29128);

	useEffect(() => {
		const interval = setInterval(() => {
			const members = Math.floor(Math.random() * (7 - 1 + 1) + 1);
			setMembers((prevState) => prevState + members);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const onChangeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<section className={s.intro}>
			<div className={cn(s.intro__wrapper, 'container')}>
				<div className={s.intro__left_block}>
					<Headline className={s.intro__headline} />
					<p className={s.intro__description}>
						The scale of the challenges facing our planet can seem daunting, but
						we can all do something.
					</p>
					<form className={s.form}>
						<input
							type="text"
							placeholder="Find the place to help"
							value={value}
							onChange={onChangeHandler}
						/>
						<LocationIcon />
						<Button className={s.intro__btn}>Search</Button>
					</form>
				</div>

				<div className={s.intro__right_block}>
					<Parrot />
					<div className={s.intro__card}>
						<Card />
						<CardIcon className={s.intro__card_icon} />
						<div className={s.intro__card_members}>
							<p>Members</p>
							<span>{members}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
