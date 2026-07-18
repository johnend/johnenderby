'use client';

import { useEffect, useState } from 'react';
import styles from './LiveClock.module.css';

const edinburghTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
  timeZone: 'Europe/London',
});

const LiveClock = () => {
  const [now, setNow] = useState(() => new Date());
  const timeParts = edinburghTimeFormatter.formatToParts(now);
  const hour = timeParts.find(({ type }) => type === 'hour')?.value;
  const minute = timeParts.find(({ type }) => type === 'minute')?.value;

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <time className={styles.clock} dateTime={now.toISOString()} suppressHydrationWarning>
      {hour}
      <span className={styles.separator}>:</span>
      {minute}
    </time>
  );
};

export default LiveClock;
