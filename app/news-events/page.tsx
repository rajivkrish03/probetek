import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export default function NewsEvents() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <FadeIn>
                        <h1>News & Events</h1>
                        <p>Stay updated with the latest from PROBETEK and the industry.</p>
                    </FadeIn>
                </div>
            </section>
            <section className={styles.content}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.card}>
                            <h2>Latest Updates</h2>
                            <p>Check back soon for the latest news, press releases, and upcoming event schedules.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
