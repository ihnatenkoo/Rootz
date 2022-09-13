import { useState, useEffect } from 'react';
import s from './Slider.module.scss';

const bgItems = [
	{ id: 1, src: ' img/slider/card-1.png' },
	{ id: 2, src: ' img/slider/card-2.png' },
	{ id: 3, src: ' img/slider/card-3.png' },
	{ id: 4, src: ' img/slider/card-4.png' },
	{ id: 5, src: ' img/slider/card-5.png' },
];

const slidesData = [
	{
		title: 'Save Water',
		descr:
			'	Taking on the issue of ensuring access to safe water require worldwide effort',
		image: 'img/slider/center-cards/card-1.png',
	},
	{
		title: 'Avoid Plastic',
		descr:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae laboriosam nam optio',
		image: 'img/slider/center-cards/card-2.png',
	},
	{
		title: 'Choose Organic',
		descr:
			'Repellat dolores unde autem molestias non qui totam ratione nostrum rem, sequi',
		image: 'img/slider/center-cards/card-3.png',
	},
	{
		title: 'Plants Trees',
		descr:
			'Sapiente quos et inventore ut vel qui culpa fugit odio provident ad ipsa perfer',
		image: 'img/slider/center-cards/card-4.png',
	},
	{
		title: 'Save Energy',
		descr:
			'Consectetur adipisicing elit. Vero placeat vitae atque aperiam! Repellat dolores',
		image: 'img/slider/center-cards/card-5.png',
	},
];

const Slider = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const onChangeSlide = (value) => {
		if (activeSlide + value > slidesData.length - 1) {
			setActiveSlide(0);
			return;
		}
		if (activeSlide + value <= 0) {
			setActiveSlide(slidesData.length - 1);
			return;
		}
		setActiveSlide(activeSlide + value);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			onChangeSlide(+1);
		}, 3000);
		return () => clearInterval(interval);
	}, [activeSlide]);

	return (
		<section className={s.slider}>
			<div className={s.slider__wrapper}>
				<div className={s.bg_items}>
					{bgItems.map((item) => (
						<div key={item.id}>
							<img
								className={s.slider__wrapper_slide}
								src={item.src}
								alt="background slide placeholder"
							/>
						</div>
					))}
				</div>

				<div className={s.center}>
					<img className={s.center__bg} src="img/slider/card-main.png" alt="" />

					<div className={s.center__text} key={activeSlide}>
						<h3>{slidesData[activeSlide].title}</h3>
						<p>{slidesData[activeSlide].descr}</p>
					</div>

					<img
						key={activeSlide + 1}
						className={s.center__img}
						src={slidesData[activeSlide].image}
						alt=""
					/>
				</div>

				<nav>
					<img
						src="img/slider/left.svg"
						alt="arrow left"
						onClick={() => onChangeSlide(-1)}
					/>
					<div className={s.counter}>
						<span className={s.counter__left}> {activeSlide + 1} </span>
						<span className={s.counter__right}>/ {slidesData.length}</span>
					</div>
					<img
						src="img/slider/right.svg"
						alt="arrow right"
						onClick={() => onChangeSlide(1)}
					/>
				</nav>
			</div>
		</section>
	);
};

export default Slider;
