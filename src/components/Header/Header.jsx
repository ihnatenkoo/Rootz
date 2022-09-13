import { useState, useEffect } from 'react';
import s from './Header.module.scss';
import cn from 'classnames';

import { ReactComponent as MainLogo } from '../../assets/icons/main-logo.svg';
import { ReactComponent as Rootz } from '../../assets/icons/rootz.svg';

const navigation = ['Home', 'Our mission', 'Places', 'Team'];

const Header = () => {
	const [activeItem, setActiveItem] = useState(navigation[0]);
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);

	useEffect(() => {
		isBurgerOpen
			? (window.document.body.style.overflow = 'hidden')
			: (window.document.body.style.overflow = 'auto');
	}, [isBurgerOpen]);

	const onClickHandler = (value) => {
		setActiveItem(value);
		setIsBurgerOpen(false);
	};

	const burgerClickHandler = () => {
		setIsBurgerOpen((prev) => !prev);
	};

	return (
		<header className={s.header}>
			<div className={s.header__logo}>
				<MainLogo className={s.logo_img} />
				<Rootz />
			</div>

			<nav className={cn({ [s.active]: isBurgerOpen })}>
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
					<button onClick={() => setIsBurgerOpen(false)}>Apply</button>
				</ul>
			</nav>
			<div
				className={cn(s.burger, { [s.active]: isBurgerOpen })}
				onClick={burgerClickHandler}
			>
				<span className={s.burger__item}></span>
			</div>
		</header>
	);
};

export default Header;
