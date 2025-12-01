import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';

export default function Company() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <FadeIn>
                        <h1>About PROBETEK</h1>
                        <p>Your Trusted Partner for Advanced Engineering & Testing Solutions in the Middle East.</p>
                    </FadeIn>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.section}>
                            <h2>Who We Are</h2>
                            <p>
                                <strong>Probetek Engineering</strong> is a premier provider of specialized engineering products and testing solutions based in <strong>Abu Dhabi, UAE</strong>. We serve a diverse range of industries across the Middle East, bridging the gap between global technology leaders and local market needs.
                            </p>
                            <p>
                                With a commitment to excellence and innovation, we partner with world-renowned manufacturers to deliver state-of-the-art systems for <strong>Aviation Safety, Power Electronics, Environmental Testing, and Power System Protection</strong>. Our mission is to empower our clients—from industrial giants to research institutions—with the reliable, high-performance tools they need to succeed.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className={styles.section}>
                            <h2>Our Core Expertise</h2>
                            <p>We specialize in four key technology domains, offering comprehensive sales, support, and consultancy:</p>
                            <div className={styles.expertiseGrid}>
                                <div className={styles.expertiseCard}>
                                    <h3>Aviation & Obstruction Lighting</h3>
                                    <p>Ensuring safety and compliance for tall structures and heliports. We supply <strong>Clampco Sistemi</strong> solutions, including:</p>
                                    <ul>
                                        <li>Aircraft Warning Lights (Low, Medium, High Intensity)</li>
                                        <li>Explosion-Proof Lights for Oil & Gas</li>
                                        <li>Heliport & Vertiport Lighting Systems</li>
                                        <li>Solar-Powered & Retractable Solutions</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Power Electronics Test Solutions</h3>
                                    <p>Advanced testing for the electric future. Partnering with <strong>NGI Technologies</strong>, we provide:</p>
                                    <ul>
                                        <li>AC/DC Power Supplies & Electronic Loads</li>
                                        <li>Battery Simulators & Supercapacitor Testers</li>
                                        <li>Fuel Cell Test Systems</li>
                                        <li>Regenerative Power Solutions</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Environmental Climatic Testing</h3>
                                    <p>Simulating real-world conditions for product validation. With <strong>Sanwood</strong>, we offer:</p>
                                    <ul>
                                        <li>Temperature & Humidity Chambers</li>
                                        <li>Thermal Shock & Rapid Change Chambers</li>
                                        <li>Battery Explosion-Proof Test Chambers</li>
                                        <li>Dust, Rain, and UV Aging Chambers</li>
                                    </ul>
                                </div>
                                <div className={styles.expertiseCard}>
                                    <h3>Power System Protection</h3>
                                    <p>Critical testing for grid stability and safety. Featuring <strong>Ponovo</strong> technology for:</p>
                                    <ul>
                                        <li>IEC61850 Digital Substation Testing</li>
                                        <li>Relay Protection & Primary Injection Testing</li>
                                        <li>EV Charging Station Testing</li>
                                        <li>HVDC & Railway Power Testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className={styles.section}>
                            <h2>Why Choose Probetek?</h2>
                            <div className={styles.valuesGrid}>
                                <div className={styles.valueCard}>
                                    <h3>Global Partnerships</h3>
                                    <p>We represent industry leaders like <strong>Clampco, NGI, Sanwood, and Ponovo</strong>, bringing world-class technology to your doorstep.</p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>Local Expertise</h3>
                                    <p>Based in the UAE, we understand the regional standards, climate challenges, and specific industry requirements.</p>
                                </div>
                                <div className={styles.valueCard}>
                                    <h3>End-to-End Support</h3>
                                    <p>From consultation and product selection to after-sales support, we are dedicated to your project's success.</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className={styles.section}>
                            <h2>Industries We Serve</h2>
                            <ul className={styles.industryList}>
                                <li>Oil & Gas and Petrochemicals</li>
                                <li>Aviation & Infrastructure</li>
                                <li>Renewable Energy (Solar, EV, Hydrogen)</li>
                                <li>Automotive & E-Mobility Manufacturing</li>
                                <li>Power Generation & Distribution Utilities</li>
                                <li>Research & Development Laboratories</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
