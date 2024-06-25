import { type MouseEventHandler } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

interface ButtonProps {
  size?: 'big'
  typeButton?: 'orange' | 'empty' | 'arrowBlue' | 'arrowWhite'
  disabled?: boolean
  active?: 'active' | undefined | ''
  title: string
  click?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = (props: ButtonProps): JSX.Element => {
  const sizeClass = props.size === 'big' ? styles.big : '';
  const typeButtonClass = props.typeButton === 'orange'
    ? styles.orange
    : props.typeButton === 'empty'
      ? styles.empty
      : props.typeButton === 'arrowBlue'
        ? styles.arrowBlue
        : props.typeButton === 'arrowWhite' ? styles.arrowWhite : '';
  const activeClass = props.active === 'active' ? styles.active : '';
  return (
    <button
      className={clsx(
        styles.myButton,
        sizeClass,
        typeButtonClass,
        activeClass
      )}
      disabled={props.disabled}
      onClick={props.click}
    >
      {props.title}
    </button>
  );
};

export default Button;
