import { InputHTMLAttributes } from 'react';
import { Check } from 'phosphor-react';

import StyleSheet from './styles.module.css';

export const Checkbox = ({
  id,
  checked,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={StyleSheet.checkboxContainer}>
      <input type="checkbox" id={id} {...props} />

      {checked ? (
        <label htmlFor={id} className={StyleSheet.labelChecked}>
          <Check size={14} />
        </label>
      ) : (
        <label htmlFor={id} className={StyleSheet.labelUnchecked} />
      )}
    </div>
  );
};
