import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('when the Header is mounted', () => {
  it('must display the header title', () => {
    render(<Header />);

    expect(screen.queryByText(/Desktop/i)).toBeInTheDocument();
  });
});
