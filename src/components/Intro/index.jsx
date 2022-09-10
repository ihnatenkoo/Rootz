import { useState } from 'react';
import s from './Intro.module.scss';
import cn from 'classnames';

import Button from '../ui/Button';

const Intro = () => {
	const [value, setValue] = useState('');

	const onChangeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<section className={s.intro}>
			<div className={cn(s.intro__wrapper, 'container')}>
				<div className={s.intro__left_block}>
					<img
						className={s.intro__headline}
						src="/src/assets/Intro/headline.svg"
						alt="nature needs you"
					/>
					<p className={s.intro__description}>
						The scale of the challenges facing our planet can seem daunting, but
						we can all do something.
					</p>
					<form>
						<input
							type="text"
							placeholder="Find the place to help"
							value={value}
							onChange={onChangeHandler}
						/>
						<img src="/src/assets/icons/location.svg" alt="location" />
						<Button className={s.intro__btn}>Search</Button>
					</form>
				</div>

				<div>
					<img src="/src/assets/Intro/parrot.svg" alt="parrot" />
				</div>
			</div>
		</section>
	);
};
export default Intro;
