import { type MouseEventHandler } from 'react';
import styles from './themeButton.module.css';
import clsx from 'clsx';

interface ModuleButtonProps {
  id: string
  isActive: boolean
  disabled?: boolean
  click: MouseEventHandler<HTMLButtonElement>
  title: string
}

export function ThemeButton(props: ModuleButtonProps): JSX.Element {
  const checkedButton = props.isActive ? styles.checked : '';
  return (
    <button
      id={props.id}
      className={clsx(
        styles.theme,
        checkedButton
      )}
      disabled={props.disabled}
      onClick={props.click}
    >{props.title}</button>
  );
}
