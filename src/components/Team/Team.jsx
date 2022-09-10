import s from './Team.module.scss';
import cn from 'classnames';

const Team = () => {
	return (
		<section className={cn(s.team, 'container')}>
			<h2 className={s.team__title}>Our top team</h2>
			<p className={s.team__description}>
				Learn more about how you can save <br /> our planet&apos;s nature.
			</p>

			<div className={s.members}>
				<img
					className={s.member_1}
					src="/src/assets/team/1.png"
					alt="team member"
				/>
				<img
					className={s.member_2}
					src="/src/assets/team/2.png"
					alt="team member"
				/>
				<img
					className={s.member_3}
					src="/src/assets/team/3.png"
					alt="team member"
				/>

				<img
					className={s.line_1}
					src="/src/assets/team/line-1.svg"
					alt="decorative line"
				/>
				<img
					className={s.line_2}
					src="/src/assets/team/line-2.svg"
					alt="decorative line"
				/>
			</div>
		</section>
	);
};

export default Team;
