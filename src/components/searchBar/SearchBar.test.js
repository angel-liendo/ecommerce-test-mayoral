import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchBar from '.';

describe('when the SearchBar is mounted', () => {
  it('must display the input textfield comp', () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();
  });
  it('must display the form comp', () => {
    render(<SearchBar />);

    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  it('must display buttons comp', () => {
    render(<SearchBar />);

    expect(screen.getByRole('button-descendant'));
    expect(screen.getByRole('button-ascendant'));
  });
});
