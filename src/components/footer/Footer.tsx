import styles from './Footer.module.css';
import {useState} from 'react';
import Modal from 'react-modal';
import TermsOfUse from '../terms/termsOfUse/TermsOfUse.tsx';
import TermsOfPrivacy from '../terms/termsOfPrivacy/TermsOfPrivacy';
import TermsOfCommitment from "../terms/termsOfCommitment/termsOfCommitment";
import * as React from "react";


const enterprise: string = 'TM Leads';
const year: number = new Date().getFullYear();

type ModalType = 'termsOfUse' | 'termsOfCommitment' | 'termsOfPrivacy';
type ModalConfig = {
    title: string;
    content: React.ReactNode;
}

Modal.setAppElement('#root');

function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState<string>('');
    const [modalContent, setModalContent] = useState<React.ReactNode>();

    const modalConfig: Record<ModalType, ModalConfig> = {
        termsOfUse: { title: 'Termo de Uso', content: <TermsOfUse /> },
        termsOfCommitment: { title: 'Termo de Compromisso', content: <TermsOfCommitment /> },
        termsOfPrivacy: { title: 'Política de Privacidade', content: <TermsOfPrivacy /> },
    };

    const openModal = (type: ModalType) => {
        const config = modalConfig[type];
        if (config) {
            setModalTitle(config.title);
            setModalContent(config.content);
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className={`${styles.footerContent} content`}>
            <section className={styles.footer}>
                <div className={styles.terms}>
                    <p onClick={() => openModal('termsOfUse')}>Termo de uso</p>
                    <p onClick={() => openModal('termsOfCommitment')}>Termo de compromisso</p>
                    <p onClick={() => openModal('termsOfPrivacy')}>Política de Privacidade</p>
                </div>
                <p>
                    © {year} {enterprise}. Todos os direitos reservados.
                </p>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                className={styles.modal}>
                <h2>{modalTitle}</h2>
                <hr />
                <div className={styles.modalContent}>
                    {modalContent}
                </div>
                <hr />
                <div className={styles.buttonModal}>
                    <button onClick={closeModal}>Fechar o modal</button>
                </div>
            </Modal>
        </div>

    );
}

export default Footer;