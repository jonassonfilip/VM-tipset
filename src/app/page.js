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
          <h2>Tabell (26/6 innan kvällsmatcherna):</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <h4>260 poäng:</h4>
              <ul>
                <li>Robin</li>
              </ul>

              <h4>255 poäng:</h4>
              <ul>
                <li>Andreas</li>
                <li>Joakim</li>
                <li>Johan M</li>
              </ul>

              <h4>250 poäng:</h4>
              <ul>
                <li>Petra</li>
              </ul>

              <h4>245 poäng:</h4>
              <ul>
                <li>Johan N</li>
                <li>Johanna</li>
              </ul>

              <h4>235 poäng:</h4>
              <ul>
                <li>Alessandro</li>
                <li>Alexander</li>
                <li>Gabriel</li>
                <li>Noel</li>
                <li>Sam</li>
              </ul>

              <h4>230 poäng:</h4>
              <ul>
                <li>Bodil</li>
                <li>Edvin</li>
                <li>Lina</li>
                <li>Linn</li>
                <li>Marcus</li>
                <li>Sofie</li>
                <li>Therese</li>
              </ul>

              <h4>225 poäng:</h4>
              <ul>
                <li>Aksel</li>
                <li>Henrik</li>
                <li>Ludwig P</li>
                <li>Mattias</li>
                <li>Niklas</li>
              </ul>

              <h4>220 poäng:</h4>
              <ul>
                <li>Filip</li>
                <li>Johan J</li>
              </ul>
            </div>

            <div className={styles.tableRow}></div>

            <div className={styles.tableRow}>
              <h4>215 poäng:</h4>
              <ul>
                <li>Jakob</li>
                <li>Linus</li>
                <li>Ludwig R</li>
                <li>Sonja</li>
              </ul>

              <h4>210 poäng:</h4>
              <ul>
                <li>Anders</li>
                <li>Hannes</li>
                <li>Oskar</li>
              </ul>

              <h4>205 poäng:</h4>
              <ul>
                <li>Anncatrine</li>
                <li>Basta</li>
                <li>Clas</li>
                <li>Frida</li>
                <li>Johannes</li>
                <li>Martin</li>
                <li>Maya</li>
              </ul>

              <h4>200 poäng:</h4>
              <ul>
                <li>Berit</li>
                <li>Oliver</li>
              </ul>

              <h4>195 poäng:</h4>
              <ul>
                <li>Jonas</li>
              </ul>

              <h4>190 poäng:</h4>
              <ul>
                <li>Birgitta</li>
                <li>Caroline</li>
                <li>Joel</li>
              </ul>

              <h4>185 poäng:</h4>
              <ul>
                <li>Atti</li>
                <li>Peter</li>
              </ul>

              <h4>175 poäng:</h4>
              <ul>
                <li>Julian</li>
                <li>Maria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
