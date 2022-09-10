import { useState } from 'react';
import s from './Header.module.scss';
import cn from 'classnames';

import { ReactComponent as MainLogo } from '../../assets/icons/main-logo.svg';
import { ReactComponent as Rootz } from '../../assets/icons/rootz.svg';

const navigation = ['Home', 'Our mission', 'Places', 'Team'];

const Header = () => {
	const [activeItem, setActiveItem] = useState(navigation[0]);

	const onClickHandler = (value) => {
		setActiveItem(value);
	};

	return (
		<header className={s.header}>
			<div className={s.header__logo}>
				<MainLogo className={s.logo_img} />
				<Rootz />
			</div>

			<nav>
				<ul>
					{navigation.map((path) => (
						<li
							onClick={() => onClickHandler(path)}
							className={cn({ [s.active]: path === activeItem })}
							key={path}
						>
							{path}
						</li>
					))}
				</ul>
			</nav>
			<button>Apply</button>
		</header>
	);
};

export default Header;
