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
          <h2>Tabell (8/7 efter åttondelarna):</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <h4>460 poäng:</h4>
              <ul>
                <li>Joakim</li>
              </ul>

              <h4>455 poäng:</h4>
              <ul>
                <li>Alexander</li>
                <li>Robin</li>
              </ul>

              <h4>440 poäng:</h4>
              <ul>
                <li>Andreas</li>
              </ul>

              <h4>435 poäng:</h4>
              <ul>
                <li>Johan M</li>
              </ul>

              <h4>430 poäng:</h4>
              <ul>
                <li>Johan J</li>
              </ul>

              <h4>425 poäng:</h4>
              <ul>
                <li>Johan N</li>
              </ul>

              <h4>420 poäng:</h4>
              <ul>
                <li>Lina</li>
              </ul>

              <h4>415 poäng:</h4>
              <ul>
                <li>Filip</li>
              </ul>

              <h4>410 poäng:</h4>
              <ul>
                <li>Frida</li>
                <li>Linus</li>
                <li>Mattias</li>
                <li>Noel</li>
              </ul>

              <h4>405 poäng:</h4>
              <ul>
                <li>Petra</li>
              </ul>

              <h4>395 poäng:</h4>
              <ul>
                <li>Henrik</li>
                <li>Therese</li>
              </ul>

              <h4>390 poäng:</h4>
              <ul>
                <li>Gabriel</li>
                <li>Sam</li>
              </ul>

              <h4>385 poäng:</h4>
              <ul>
                <li>Aksel</li>
                <li>Clas</li>
                <li>Edvin</li>
                <li>Marcus</li>
                <li>Niklas</li>
                <li>Sofie</li>
                <li>Sonja</li>
              </ul>

              <h4>380 poäng:</h4>
              <ul>
                <li>Alessandro</li>
              </ul>
            </div>

            <div className={styles.tableRow}></div>

            <div className={styles.tableRow}>
              <h4>375 poäng:</h4>
              <ul>
                <li>Bodil</li>
                <li>Johannes</li>
                <li>Ludwig R</li>
              </ul>

              <h4>370 poäng:</h4>
              <ul>
                <li>Hannes</li>
                <li>Jakob</li>
                <li>Martin</li>
              </ul>

              <h4>365 poäng:</h4>
              <ul>
                <li>Anders</li>
                <li>Anncatrine</li>
              </ul>

              <h4>360 poäng:</h4>
              <ul>
                <li>Maria</li>
              </ul>

              <h4>355 poäng:</h4>
              <ul>
                <li>Berit</li>
              </ul>

              <h4>350 poäng:</h4>
              <ul>
                <li>Johanna</li>
                <li>Oliver</li>
                <li>Oskar</li>
              </ul>

              <h4>345 poäng:</h4>
              <ul>
                <li>Linn</li>
              </ul>

              <h4>340 poäng:</h4>
              <ul>
                <li>Ludwig P</li>
              </ul>

              <h4>335 poäng:</h4>
              <ul>
                <li>Julian</li>
                <li>Maya</li>
              </ul>

              <h4>330 poäng:</h4>
              <ul>
                <li>Caroline</li>
              </ul>

              <h4>325 poäng:</h4>
              <ul>
                <li>Basta</li>
                <li>Birgitta</li>
              </ul>

              <h4>315 poäng:</h4>
              <ul>
                <li>Joel</li>
                <li>Jonas</li>
              </ul>

              <h4>305 poäng:</h4>
              <ul>
                <li>Atti</li>
              </ul>

              <h4>290 poäng:</h4>
              <ul>
                <li>Peter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
