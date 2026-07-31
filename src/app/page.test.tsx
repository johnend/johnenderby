import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('portfolio home page', () => {
  it('renders the editorial portfolio spreads', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Design-led\.Engineering-minded\.Curious by nature\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Featured work' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Writing' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument();
  });
});
