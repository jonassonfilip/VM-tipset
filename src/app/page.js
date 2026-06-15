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
          <h2>Tabell:</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <h4>60 poäng:</h4>
              <ul>
                <li>Martin</li>
                <li>Therese</li>
              </ul>

              <h4>55 poäng:</h4>
              <ul>
                <li>Johan J</li>
                <li>Petra</li>
              </ul>

              <h4>50 poäng:</h4>
              <ul>
                <li>Aksel</li>
                <li>Andreas</li>
                <li>Berit</li>
                <li>Filip</li>
                <li>Henrik</li>
                <li>Johan N</li>
                <li>Johannes</li>
                <li>Julian</li>
                <li>Mattias</li>
                <li>Sam</li>
                <li>Sonja</li>
              </ul>

              <h4>45 poäng:</h4>
              <ul>
                <li>Basta</li>
                <li>Caroline</li>
                <li>Johanna</li>
              </ul>

              <h4>40 poäng:</h4>
              <ul>
                <li>Alessandro</li>
                <li>Alexander</li>
                <li>Bodil</li>
                <li>Clas</li>
                <li>Edvin</li>
                <li>Joakim</li>
                <li>Johan M</li>
                <li>Marcus</li>
                <li>Maria</li>
                <li>Maya</li>
                <li>Niklas</li>
                <li>Noel</li>
                <li>Robin</li>
              </ul>
            </div>

            <div className={styles.tableRow}></div>

            <div className={styles.tableRow}>
              <h4>35 poäng:</h4>
              <ul>
                <li>Gabriel</li>
                <li>Hannes</li>
                <li>Jakob</li>
                <li>Jonas</li>
                <li>Ludwig P</li>
                <li>Oskar</li>
              </ul>

              <h4>30 poäng:</h4>
              <ul>
                <li>Anncatrine</li>
                <li>Atti</li>
                <li>Birgitta</li>
                <li>Frida</li>
                <li>Joel</li>
                <li>Lina</li>
                <li>Linus</li>
                <li>Ludwig R</li>
                <li>Oliver</li>
                <li>Sofie</li>
              </ul>

              <h4>25 poäng:</h4>
              <ul>
                <li>Anders</li>
                <li>Linn</li>
                <li>Peter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
