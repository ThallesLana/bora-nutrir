import styles from './ImpactTitle.module.css';
import impactTitleImage from '/impactTitle.png';
import scrollToFormLead from '../../utils/scrollToFormLead';
const impactTitle = 'Não lute contra a balança sozinho!';
const impactSubtitle = 'Tenha um nutricionista como aliado. O investimento no seu bem-estar começa aqui!';

function ImpactTitle() {
 return (
    <div className='content'>
        <main className={styles.mainContent}>
            <aside className={styles.aside}>
                <h2>
                    {impactTitle}
                </h2>
                <p>
                   {impactSubtitle}
                </p>

                <button id="contactButton" onClick={scrollToFormLead}>
                    Solicite o contato de um profissional!
                </button>
            </aside>
            <section className={styles.imageBackground}>
                <img src={impactTitleImage} alt='Imagem de impacto' />
            </section>
        </main>
    </div>
 ) 
}

export default ImpactTitle;