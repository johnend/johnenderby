import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import styles from './SpreadContainer.module.css';

type SpreadContainerProps = ComponentPropsWithoutRef<'section'> & {
  tone?: 'paper' | 'ink';
  viewport?: boolean;
};

const SpreadContainer = ({ tone = 'paper', viewport = true, className, ...props }: SpreadContainerProps) => {
  return (
    <section className={clsx(styles.spread, styles[tone], viewport && styles.viewport, className)} {...props}></section>
  );
};

export default SpreadContainer;
