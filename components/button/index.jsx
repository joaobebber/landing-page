import styles from './button.module.scss';

/**
 *
 * @param {*} title String
 * @param {*} kind "primary" | "secondary"
 * @returns
 */
const Button = ({ title, kind }) => {
	const generateClassByKind = () => {
		if (kind === 'secondary') return styles.secondary;
		return styles.primary;
	};

	return (
		<button className={`${styles.button} ${generateClassByKind()}`}>
			{title}
		</button>
	);
};

export default Button;
