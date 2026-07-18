import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { SpreadNumber, SpreadTitle } from '@/components/editorial';
import styles from './SpreadContainer.module.css';

type SpreadContainerProps = ComponentPropsWithoutRef<'section'> & {
  spreadNumber?: number;
  spreadTitle?: string;
  tone?: 'paper' | 'ink';
};

const SpreadContainer = ({
  spreadNumber,
  spreadTitle,
  tone = 'paper',
  className,
  children,
  ...props
}: SpreadContainerProps) => {
  return (
    <section className={clsx(styles.spread, styles[tone], className)} {...props}>
      {spreadNumber !== undefined && <SpreadNumber className={styles.spreadNumber} number={spreadNumber} tone={tone} />}
      {spreadTitle !== undefined && <SpreadTitle className={styles.spreadTitle} title={spreadTitle} tone={tone} />}
      {children}
    </section>
  );
};

export default SpreadContainer;
