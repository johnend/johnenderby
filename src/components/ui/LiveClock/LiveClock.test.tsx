import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import LiveClock from './LiveClock';

describe('LiveClock', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('pads midnight hours to two digits', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-01T00:05:00Z'));

    const { container } = render(<LiveClock />);

    expect(container.querySelector('time')).toHaveTextContent('00:05');
  });
});
