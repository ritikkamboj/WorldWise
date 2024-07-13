/* eslint-disable react/prop-types */
import styles  from './Button.module.css';

function Button({children, onClick, type}) {
    // console.log('jai shree ram');
    return (
       <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>{children}</button>
    )
}

export default Button;
