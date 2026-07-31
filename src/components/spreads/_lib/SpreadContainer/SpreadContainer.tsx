import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { SpreadTitle } from '@/components/editorial';
import styles from './SpreadContainer.module.css';

type SpreadContainerProps = ComponentPropsWithoutRef<'section'> & {
  composition?: 'viewport' | 'content';
  spreadTitle?: string;
  tone?: 'paper' | 'ink';
};

const SpreadContainer = ({
  composition = 'viewport',
  spreadTitle,
  tone = 'paper',
  className,
  children,
  ...props
}: SpreadContainerProps) => {
  return (
    <section
      className={clsx(styles.spread, styles[tone], composition === 'content' && styles.contentComposition, className)}
      data-spread
      data-tone={tone}
      {...props}
    >
      {spreadTitle !== undefined && <SpreadTitle className={styles.spreadTitle} title={spreadTitle} tone={tone} />}
      {children}
    </section>
  );
};

export default SpreadContainer;
