import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/probetek/logo.png" alt="PROBETEK" className={styles.logoImage} />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/company">Company</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/applications">Applications</Link></li>
                        <li><Link href="/partners">Partners</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
