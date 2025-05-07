import styles from './BulletPoints.module.css';  

const impactTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const bulletPoints = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit;',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit;',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit;',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit;',
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