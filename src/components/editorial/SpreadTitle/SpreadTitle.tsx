import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import styles from './SpreadTitle.module.css';

type SpreadTitleProps = ComponentPropsWithoutRef<'h2'> & {
  title: string;
  tone?: 'paper' | 'ink';
};

const SpreadTitle = ({ title, tone = 'paper', className, ...props }: SpreadTitleProps) => {
  return (
    <h2 className={clsx(styles.spreadTitle, styles[tone], className)} {...props}>
      {title}
    </h2>
  );
};

export default SpreadTitle;
