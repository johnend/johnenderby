import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('portfolio rebuild status', () => {
  it('identifies the page as a structure-only preview', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'Portfolio rebuild in progress' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Next.js foundation ready for review');
  });
});
