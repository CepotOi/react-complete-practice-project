import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ message, closeModal }) => {
  return (
    <div className={styles.modal} onClick={e => closeModal()}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}><h2>Invalid Input</h2></div>
        <div className={styles['modal-body']}>
          <span>{message}</span>
        </div>
        <div className={styles['modal-footer']}>
          <Button type="button" onClick={e => closeModal()}>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;;;