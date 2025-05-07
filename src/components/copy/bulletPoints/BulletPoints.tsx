import styles from './BulletPoints.module.css';  

const impactTitle = 'Por que nos escolher?';
const bulletPoints = [
  'Plano alimentar adequado às suas necessidades e objetivos;',
  'Acompanhamento Individualizado;',
  'Suporte contínuo do profissional para alcançar seus resultados;',
  'Reeducação Alimentar, aprenda a fazer escolhas saudáveis e duradouras;',
]

function BulletPoints() {
  return (
    <div className="content bg-none">
      <main className={styles.bulletPoints}>
        <h1>{impactTitle}</h1>
        <hr />
        <div className={styles.bulletPointsContent}>
          <ul className={styles.bulletPointsList}>
            {bulletPoints.map((point, index) => (
              <li key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default BulletPoints;