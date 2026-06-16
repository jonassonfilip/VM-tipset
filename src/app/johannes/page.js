import Image from 'next/image';
import coupon from '/public/johannes-1.png';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className={styles.coupon}>
      <Link
        href="/"
        className={styles.backButton}
        aria-label="Tillbaka till startsidan"
      >
        ←
      </Link>
      <h1>Johannes Carlsson</h1>
      <Image src={coupon} alt="The participants magnificent bet" />
    </div>
  );
}
