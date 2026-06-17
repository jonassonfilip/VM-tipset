import Image from 'next/image';
import coupon from '/public/petra-1.png';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div className={styles.coupon}>
      <h1>
        <Link
          href="/"
          className={styles.backButton}
          aria-label="Tillbaka till startsidan"
        >
          ←
        </Link>{' '}
        Petra Wickberg
      </h1>
      <Image src={coupon} alt="The participants magnificent bet" />
    </div>
  );
}
