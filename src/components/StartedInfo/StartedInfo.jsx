import { useState } from 'react';

import s from './StartedInfo.module.scss';
import cn from 'classnames';
import Button from '../ui/Button/Button';

import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';

const accordionData = [
	{
		title: 'What can I do to protect our planet?',
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
	{
		title: 'How to save nature ecology?',
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
	{
		title: 'What is nature conservation?',
		text: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
	},
];

const StartedInfo = () => {
	const [selectedItem, setSelectedItem] = useState('');

	const changeHandler = (value) => {
		value === selectedItem ? setSelectedItem('') : setSelectedItem(value);
	};

	return (
		<section className={cn(s.main, 'container')}>
			<div className={s.info}>
				<h2>Ready to Get started?</h2>
				<p>
					When pattern is mentioned in interior design, it is easy to asso-
					ciate it with a geometric patterned wallpaper or colourful prints on
					interior fabrics.
				</p>
				<Button>Contact us</Button>
			</div>

			<ul className={s.accordion}>
				{accordionData.map((item, i) => (
					<li className={cn({ [s.active]: selectedItem === i })} key={i}>
						<header>
							<h3>{item.title}</h3>
							<div
								className={s.accordion__btn}
								onClick={() => changeHandler(i)}
							>
								{selectedItem === i ? <Minus /> : <Plus />}
							</div>
						</header>

						<p className={s.accordion__description}>{item.text}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default StartedInfo;
