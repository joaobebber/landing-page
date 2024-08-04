import Icon from '@/public/images/icon.svg';
import styles from './features.module.scss';
import Image from 'next/image';

const Features = () => {
	return (
		<div className={styles.container}>
			<h1>Neste bairro, não há agência melhor. Garantimos.</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>

			<div className={styles.features}>
				<div className={styles.feature}>
					<Image src={Icon} alt='Card icon' className={styles.icon} />
					<h1>Digital Strategy</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna.
					</p>
				</div>
				<div className={styles.feature}>
					<Image src={Icon} alt='Card icon' className={styles.icon} />
					<h1>Digital Strategy</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna.
					</p>
				</div>
				<div className={styles.feature}>
					<Image src={Icon} alt='Card icon' className={styles.icon} />
					<h1>Digital Strategy</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna.
					</p>
				</div>
				<div className={styles.feature}>
					<Image src={Icon} alt='Card icon' className={styles.icon} />
					<h1>Digital Strategy</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
