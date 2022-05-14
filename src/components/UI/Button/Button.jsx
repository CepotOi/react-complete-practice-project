import styles from './Button.module.css';

const Button = props => {
  return (
    // type={props.type || 'button'} => fallback type if type is undefined
    <button type={props.type || 'button'} className={styles.button} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;