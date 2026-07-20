import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const participants = [
  'Aksel',
  'Alessandro',
  'Alexander',
  'Anders',
  'Andreas',
  'Anncatrine',
  'Atti',
  'Basta',
  'Berit',
  'Birgitta',
  'Bodil',
  'Caroline',
  'Clas',
  'Edvin',
  'Filip',
  'Frida',
  'Gabriel',
  'Hannes',
  'Henrik',
  'Jakob',
  'Joakim',
  'Joel',
  'Johan J',
  'Johan M',
  'Johan N',
  'Johanna',
  'Johannes',
  'Jonas',
  'Julian',
  'Lina',
  'Linn',
  'Linus',
  'Ludwig P',
  'Ludwig R',
  'Marcus',
  'Maria',
  'Martin',
  'Maya',
  'Mattias',
  'Niklas',
  'Noel',
  'Oliver',
  'Oskar',
  'Peter',
  'Petra',
  'Robin',
  'Sam',
  'Sofie',
  'Sonja',
  'Therese',
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.background}>
          <h1 className={styles.header}>Welcome to the huge World Cup bet!</h1>
          <h1 className={`${styles.header} ${styles.foreignLanguage}`}>
            ¡Bienvenido a la gran apuesta de la Copa del Mundo!
          </h1>
          <h1 className={`${styles.header} ${styles.foreignLanguage}`}>
            Bienvenue dans le grand pari sur la Coupe du Monde!
          </h1>
          <div className={styles.participants}>
            {participants.map((participant, index) => (
              <div key={index} className={styles.participant}>
                <p className={styles.description}>
                  <Link
                    href={`/${participant.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {participant}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.table}>
          <h2>Slutgiltig tabell VM-tipset 2026:</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <h3 className={styles.gold}>535 poäng: (Mästaren: 5000 kr)</h3>
              <ul>
                <li>
                  <h3>Joakim</h3>
                </li>
              </ul>

              <h4 className={styles.silver}>530 poäng: (2:a plats: 2000 kr)</h4>
              <ul>
                <li>Robin</li>
              </ul>

              <h4 className={styles.bronze}>510 poäng: (3:e plats: 1200 kr)</h4>
              <ul>
                <li>Johan M</li>
              </ul>

              <h4>500 poäng: (4:e plats: 800 kr)</h4>
              <ul>
                <li>Alexander</li>
              </ul>

              <h4>485 poäng: (5:e & 6:e plats: 400+200 kr att dela på)</h4>
              <ul>
                <li>Linus</li>
                <li>Noel</li>
              </ul>

              <h4>480 poäng:</h4>
              <ul>
                <li>Lina</li>
              </ul>

              <h4>475 poäng:</h4>
              <ul>
                <li>Filip</li>
              </ul>

              <h4>470 poäng:</h4>
              <ul>
                <li>Andreas</li>
                <li>Frida</li>
                <li>Johan N</li>
              </ul>

              <h4>465 poäng:</h4>
              <ul>
                <li>Gabriel</li>
              </ul>

              <h4>455 poäng:</h4>
              <ul>
                <li>Mattias</li>
              </ul>

              <h4>445 poäng:</h4>
              <ul>
                <li>Edvin</li>
                <li>Johan J</li>
                <li>Marcus</li>
              </ul>

              <h4>440 poäng:</h4>
              <ul>
                <li>Anders</li>
                <li>Anncatrine</li>
              </ul>

              <h4>435 poäng:</h4>
              <ul>
                <li>Petra</li>
                <li>Sam</li>
              </ul>

              <h4>430 poäng:</h4>
              <ul>
                <li>Aksel</li>
                <li>Clas</li>
                <li>Martin</li>
              </ul>
            </div>

            <div className={styles.tableRow}></div>

            <div className={styles.tableRow}>
              <h4>425 poäng: (Mittenfållan: 300 kr efter lottning)</h4>
              <ul>
                <li>Alessandro</li>
                <li>Oliver</li>
                <li>
                  <u>Therese</u>
                </li>
              </ul>

              <h4>420 poäng:</h4>
              <ul>
                <li>Ludwig R</li>
              </ul>

              <h4>415 poäng:</h4>
              <ul>
                <li>Niklas</li>
                <li>Sofie</li>
                <li>Sonja</li>
              </ul>

              <h4>410 poäng:</h4>
              <ul>
                <li>Henrik</li>
              </ul>

              <h4>405 poäng:</h4>
              <ul>
                <li>Linn</li>
                <li>Maria</li>
              </ul>

              <h4>390 poäng:</h4>
              <ul>
                <li>Bodil</li>
              </ul>

              <h4>385 poäng:</h4>
              <ul>
                <li>Jakob</li>
              </ul>

              <h4>380 poäng:</h4>
              <ul>
                <li>Maya</li>
                <li>Oskar</li>
              </ul>

              <h4>375 poäng:</h4>
              <ul>
                <li>Johannes</li>
                <li>Jonas</li>
              </ul>

              <h4>370 poäng:</h4>
              <ul>
                <li>Hannes</li>
              </ul>

              <h4>365 poäng:</h4>
              <ul>
                <li>Johanna</li>
              </ul>

              <h4>355 poäng:</h4>
              <ul>
                <li>Berit</li>
                <li>Ludwig P</li>
              </ul>

              <h4>350 poäng:</h4>
              <ul>
                <li>Basta</li>
              </ul>

              <h4>345 poäng:</h4>
              <ul>
                <li>Caroline</li>
                <li>Joel</li>
              </ul>

              <h4>340 poäng:</h4>
              <ul>
                <li>Birgitta</li>
              </ul>

              <h4>335 poäng:</h4>
              <ul>
                <li>Julian</li>
              </ul>

              <h4>305 poäng: (Plåster på såren: 100 kr att dela på)</h4>
              <ul>
                <li>Atti</li>
                <li>Peter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
