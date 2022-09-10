import s from './Button.module.scss';
import cn from 'classnames';

const Button = ({ children, className }) => {
	return <button className={cn(s.button, className)}>{children}</button>;
};
export default Button;
