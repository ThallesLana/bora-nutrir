import styles from './ClearProposal.module.css';  

const impactTitle = 'Transforme sua Saúde e Bem-Estar!';

function ClearProposal() {
  return (
    <div className="content bg-none">
      <main className={styles.clearProposal}>
        <h1>{impactTitle}</h1>
        <hr />
        <h3>Descubra o caminho para uma vida mais <strong>saudável</strong> e <strong>equilibrada</strong>.</h3>
      </main>
    </div>
  );
}

export default ClearProposal;