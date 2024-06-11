import { memo } from 'react';

import styles from './Checkbox.module.css';

import type { FC, InputHTMLAttributes } from 'react';

export interface CheckboxProps {
  text: string;
  checked?: boolean;

  onChange?: () => void;
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { text, checked, onChange } = props;

  return (
    <label className={styles.label}>
      <input className={styles.input} type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles['custom']}></span>
      {text}
    </label>
  );
};

export default memo(Checkbox);
