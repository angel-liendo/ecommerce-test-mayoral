import React from 'react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/react-testing';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
    await waitFor(() => expect(screen.queryByRole('card-list')).not.toBeInTheDocument());

    const loader = expect(await screen.findByRole('loader')).toBeInTheDocument();
    expect(await screen.findByRole('card-list'));
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

describe('when user blurs textfild and put text textfild comp', () => {
  it('input', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>,
    );

    expect(await screen.findByText('Polo Shirt classic', { selector: 'span' })).toBeInTheDocument();

    fireEvent.change(await screen.findByPlaceholderText('Buscar'), {
      target: { value: 'classic' },
    });

    expect(await screen.findByText('Polo Shirt classic', { selector: 'span' })).toBeInTheDocument();

    fireEvent.change(await screen.findByPlaceholderText('Buscar'), {
      target: { value: 'Polo Shirt classic' },
    });

    const product = expect(
      await screen.findByText('Polo Shirt classic', { selector: 'span' }),
    ).toBeInTheDocument();

    fireEvent.change(await screen.findByPlaceholderText('Buscar'), {
      target: { value: 'Polo Shirt NOT FOUND' },
    });

    expect(product).toBeUndefined();

    expect(
      await screen.findByText('No product found...', { selector: 'span' }),
    ).toBeInTheDocument();
  });
});
