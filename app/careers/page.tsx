import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export default function Careers() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <FadeIn>
                        <h1>Careers at PROBETEK</h1>
                        <p>Join our team of experts and help shape the future of engineering.</p>
                    </FadeIn>
                </div>
            </section>
            <section className={styles.content}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.card}>
                            <h2>Join Our Team</h2>
                            <p>We are always looking for talented individuals to join our growing team. While there are no open positions at the moment, feel free to send your CV to info@probetek.ae for future consideration.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
