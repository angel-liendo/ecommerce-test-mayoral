import React from 'react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/react-testing';
import { render, screen } from '@testing-library/react';
import Home from '.';
import { ALL_PRODUCTS } from '../graphql/querys';

const mocks = [
  {
    request: {
      query: ALL_PRODUCTS,
      variables: {},
    },
    result: {
      data: {
        allProducts: [
          {
            id: '22',
            title: 'Polo Shirt classic',
            img: '2342444324443324443442r.PNG',
            price: 22.99,
            discount: 12.5,
            colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
          },
        ],
      },
    },
  },
];

describe('when the Home is mounted and mocks called', () => {
  it('must display Card and children: loader, title, price, discount, Más colores, Añadir', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>,
    );
    const loader = expect(await screen.findByRole('loader')).toBeInTheDocument();
    expect(await screen.findByAltText(/Polo Shirt classic/i)).toBeInTheDocument();
    expect(await screen.findByText('Polo Shirt classic', { selector: 'span' })).toBeInTheDocument();
    expect(
      await screen.findByText('22,99', { selector: 'span', exact: false }),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('12,50', { selector: 'span', exact: false }),
    ).toBeInTheDocument();
    expect(await screen.findByText('Más colores', { selector: 'button' })).toBeInTheDocument();
    expect(await screen.findByText('Añadir', { selector: 'button' })).toBeInTheDocument();
    expect(loader).toBeUndefined();
  });
});
