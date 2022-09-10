import s from './Footer.module.scss';

import { ReactComponent as Twitter } from '../../assets/icons/social/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/icons/social/facebook.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/social/linkedin.svg';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.footer__wrapper}>
					<div className={s.footer__contacts}>
						<h2>Contacts</h2>
						<p>2019 Rootz Foundation. All rights reserved</p>
					</div>
					<div className={s.footer__headquarters}>
						<h3>Headquarters</h3>
						<address>
							1234 TalibanLos <br /> Angeles, La 1234567 <br />
							(123) 456-7890
						</address>
					</div>
					<div className={s.footer__social}>
						<h3>Social media</h3>
						<div className={s.footer__social_icons}>
							<a
								href="https://www.linkedin.com/in/dmytro-ihnatenko-a59254245/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Twitter />
							</a>
							<a
								href="https://www.linkedin.com/in/dmytro-ihnatenko-a59254245/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Facebook />
							</a>
							<a
								href="https://www.linkedin.com/in/dmytro-ihnatenko-a59254245/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
