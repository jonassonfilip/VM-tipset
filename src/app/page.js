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
          <h2>Tabell (25/6 innan kvällsmatcherna):</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <h4>220 poäng:</h4>
              <ul>
                <li>Johanna</li>
              </ul>

              <h4>215 poäng:</h4>
              <ul>
                <li>Alessandro</li>
                <li>Gabriel</li>
                <li>Joakim</li>
                <li>Petra</li>
              </ul>

              <h4>210 poäng:</h4>
              <ul>
                <li>Andreas</li>
                <li>Johan M</li>
                <li>Robin</li>
                <li>Sam</li>
              </ul>

              <h4>205 poäng:</h4>
              <ul>
                <li>Alexander</li>
                <li>Edvin</li>
                <li>Johan J</li>
                <li>Therese</li>
              </ul>

              <h4>200 poäng:</h4>
              <ul>
                <li>Aksel</li>
                <li>Bodil</li>
                <li>Johan N</li>
                <li>Linn</li>
                <li>Sofie</li>
              </ul>

              <h4>195 poäng:</h4>
              <ul>
                <li>Hannes</li>
                <li>Henrik</li>
                <li>Lina</li>
                <li>Marcus</li>
                <li>Maya</li>
                <li>Noel</li>
                <li>Oskar</li>
              </ul>

              <h4>190 poäng:</h4>
              <ul>
                <li>Filip</li>
                <li>Ludwig P</li>
                <li>Ludwig R</li>
                <li>Niklas</li>
              </ul>
            </div>

            <div className={styles.tableRow}></div>

            <div className={styles.tableRow}>
              <h4>185 poäng:</h4>
              <ul>
                <li>Frida</li>
                <li>Johannes</li>
                <li>Linus</li>
                <li>Mattias</li>
                <li>Oliver</li>
                <li>Sonja</li>
              </ul>

              <h4>180 poäng:</h4>
              <ul>
                <li>Basta</li>
                <li>Berit</li>
                <li>Jakob</li>
                <li>Martin</li>
              </ul>

              <h4>175 poäng:</h4>
              <ul>
                <li>Anders</li>
              </ul>

              <h4>170 poäng:</h4>
              <ul>
                <li>Anncatrine</li>
                <li>Birgitta</li>
                <li>Clas</li>
                <li>Jonas</li>
              </ul>

              <h4>160 poäng:</h4>
              <ul>
                <li>Peter</li>
              </ul>

              <h4>155 poäng:</h4>
              <ul>
                <li>Caroline</li>
                <li>Joel</li>
                <li>Julian</li>
              </ul>

              <h4>150 poäng:</h4>
              <ul>
                <li>Maria</li>
              </ul>

              <h4>145 poäng:</h4>
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
