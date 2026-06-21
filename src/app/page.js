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
          <h2>Tabell (20/6 innan Sverige torskade):</h2>
          <div className={styles.tableRows}>
            <div className={styles.tableRow}>
              <h4>105 poäng:</h4>
              <ul>
                <li>Petra</li>
              </ul>

              <h4>100 poäng:</h4>
              <ul>
                <li>Alessandro</li>
                <li>Andreas</li>
                <li>Robin</li>
                <li>Sonja</li>
                <li>Therese</li>
              </ul>

              <h4>95 poäng:</h4>
              <ul>
                <li>Aksel</li>
                <li>Johan J</li>
                <li>Mattias</li>
                <li>Maya</li>
                <li>Sofie</li>
              </ul>

              <h4>90 poäng:</h4>
              <ul>
                <li>Caroline</li>
                <li>Gabriel</li>
                <li>Henrik</li>
                <li>Martin</li>
                <li>Niklas</li>
                <li>Sam</li>
              </ul>

              <h4>85 poäng:</h4>
              <ul>
                <li>Alexander</li>
                <li>Bodil</li>
                <li>Joakim</li>
                <li>Johan N</li>
                <li>Julian</li>
                <li>Noel</li>
              </ul>
            </div>

            <div className={styles.tableRow}></div>

            <div className={styles.tableRow}>
              <h4>80 poäng:</h4>
              <ul>
                <li>Edvin</li>
                <li>Jakob</li>
                <li>Johan M</li>
                <li>Johanna</li>
                <li>Johannes</li>
                <li>Linn</li>
                <li>Ludwig P</li>
                <li>Marcus</li>
              </ul>

              <h4>75 poäng:</h4>
              <ul>
                <li>Basta</li>
                <li>Berit</li>
                <li>Filip</li>
                <li>Frida</li>
                <li>Hannes</li>
                <li>Jonas</li>
                <li>Lina</li>
                <li>Oskar</li>
              </ul>

              <h4>70 poäng:</h4>
              <ul>
                <li>Clas</li>
                <li>Linus</li>
                <li>Ludwig R</li>
              </ul>

              <h4>65 poäng:</h4>
              <ul>
                <li>Anncatrine</li>
                <li>Atti</li>
                <li>Birgitta</li>
                <li>Joel</li>
                <li>Maria</li>
                <li>Oliver</li>
                <li>Peter</li>
              </ul>

              <h4>60 poäng:</h4>
              <ul>
                <li>Anders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
