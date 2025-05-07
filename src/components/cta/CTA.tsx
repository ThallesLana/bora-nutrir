import scrollToFormLead from '../../utils/scrollToFormLead';
import styles from './CTA.module.css';

const ctaMain = 'Não perca tempo!';
const ctaSecundary = 'Comece sua jornada de transformação.';
const ctaButton = 'Quero uma vida mais saudável!';

function CTA() {
    return (
        <div className="content">
            <main className={styles.CTA}>
                <h3>
                    {ctaMain}
                    <br />
                    {ctaSecundary}
                </h3>
                <button id='contactButtonCTA' onClick={scrollToFormLead}>
                    {ctaButton}
                </button>
            </main>
        </div>
    );
}

export default CTA;