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
          <h2>Tabell (28/6 efter gruppspelet):</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <h4>370 poäng:</h4>
              <ul>
                <li>Joakim</li>
              </ul>

              <h4>365 poäng:</h4>
              <ul>
                <li>Robin</li>
              </ul>

              <h4>355 poäng:</h4>
              <ul>
                <li>Alexander</li>
                <li>Johan M</li>
              </ul>

              <h4>350 poäng:</h4>
              <ul>
                <li>Andreas</li>
                <li>Johan N</li>
              </ul>

              <h4>340 poäng:</h4>
              <ul>
                <li>Johan J</li>
                <li>Petra</li>
              </ul>

              <h4>335 poäng:</h4>
              <ul>
                <li>Linus</li>
              </ul>

              <h4>330 poäng:</h4>
              <ul>
                <li>Lina</li>
              </ul>

              <h4>325 poäng:</h4>
              <ul>
                <li>Alessandro</li>
                <li>Marcus</li>
                <li>Niklas</li>
                <li>Sam</li>
              </ul>

              <h4>320 poäng:</h4>
              <ul>
                <li>Bodil</li>
                <li>Filip</li>
                <li>Gabriel</li>
                <li>Henrik</li>
                <li>Mattias</li>
                <li>Noel</li>
              </ul>

              <h4>310 poäng:</h4>
              <ul>
                <li>Frida</li>
                <li>Sofie</li>
              </ul>

              <h4>305 poäng:</h4>
              <ul>
                <li>Edvin</li>
                <li>Johanna</li>
                <li>Johannes</li>
                <li>Linn</li>
                <li>Martin</li>
                <li>Therese</li>
              </ul>
            </div>

            <div className={styles.tableRow}></div>

            <div className={styles.tableRow}>
              <h4>300 poäng:</h4>
              <ul>
                <li>Aksel</li>
                <li>Anncatrine</li>
                <li>Clas</li>
                <li>Sonja</li>
              </ul>

              <h4>295 poäng:</h4>
              <ul>
                <li>Anders</li>
                <li>Ludwig P</li>
                <li>Ludwig R</li>
                <li>Oliver</li>
              </ul>

              <h4>290 poäng:</h4>
              <ul>
                <li>Berit</li>
                <li>Jakob</li>
              </ul>

              <h4>285 poäng:</h4>
              <ul>
                <li>Hannes</li>
              </ul>

              <h4>280 poäng:</h4>
              <ul>
                <li>Basta</li>
                <li>Oskar</li>
              </ul>

              <h4>275 poäng:</h4>
              <ul>
                <li>Jonas</li>
              </ul>

              <h4>270 poäng:</h4>
              <ul>
                <li>Birgitta</li>
                <li>Joel</li>
                <li>Maria</li>
              </ul>

              <h4>265 poäng:</h4>
              <ul>
                <li>Caroline</li>
                <li>Maya</li>
              </ul>

              <h4>260 poäng:</h4>
              <ul>
                <li>Peter</li>
              </ul>

              <h4>255 poäng:</h4>
              <ul>
                <li>Julian</li>
              </ul>

              <h4>240 poäng:</h4>
              <ul>
                <li>Atti</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
