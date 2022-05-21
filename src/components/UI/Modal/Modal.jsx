import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ title, message, onCloseModal }) => {
  return (
    createPortal(
      <div className={styles.modal} onClick={e => onCloseModal()}>
        <div className={styles['modal-content']}>
          <div className={styles['modal-header']}><h2>{title}</h2></div>
          <div className={styles['modal-body']}>
            <span>{message}</span>
          </div>
          <div className={styles['modal-footer']}>
            <Button type="button" onClick={e => onCloseModal()}>Okay</Button>
          </div>
        </div>
      </div>, document.getElementById('modal-root')
    )
  );
};

export default Modal;