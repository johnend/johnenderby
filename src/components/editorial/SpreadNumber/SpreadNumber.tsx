import type { ComponentPropsWithoutRef } from 'react';
import styles from './SpreadNumber.module.css';
import clsx from 'clsx';

type SpreadNumberProps = ComponentPropsWithoutRef<'span'> & {
  number: number;
  tone?: 'paper' | 'ink';
};

const SpreadNumber = ({ number, tone = 'paper', className, ...props }: SpreadNumberProps) => {
  return (
    <span className={clsx(styles.spreadNumber, styles[tone], className)} {...props}>
      {number.toString().padStart(2, '0')}
    </span>
  );
};

export default SpreadNumber;
