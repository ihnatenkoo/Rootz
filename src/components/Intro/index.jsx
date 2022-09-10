import { useState } from 'react';
import s from './Intro.module.scss';
import cn from 'classnames';

import Button from '../ui/Button';
import { ReactComponent as Headline } from '../../assets/Intro/headline.svg';
import { ReactComponent as Parrot } from '../../assets/Intro/parrot.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';

const Intro = () => {
	const [value, setValue] = useState('');

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
					<form>
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

				<div>
					<Parrot />
				</div>
			</div>
		</section>
	);
};

export default Intro;
