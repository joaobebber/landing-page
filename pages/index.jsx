import Header from '@/components/header';
import Welcome from '@/components/welcome';
import Features from '@/components/features';
import styles from './Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<Welcome />
			<Features />
		</div>
	);
}
