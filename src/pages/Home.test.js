import React from 'react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/react-testing';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
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
            price: 3,
            discount: 8,
            colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
          },
          {
            id: '11',
            title: 'Polo Shirt classic hight price',
            img: '2342444324443324443442r.PNG',
            price: 222.99,
            discount: 222.99,
            colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
          },
          {
            id: '33',
            title: 'Polo Shirt low price',
            img: '2342444324443324443442r.PNG',
            price: 1.99,
            discount: 1.99,
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
    expect(await screen.findByText('3', { selector: 'span', exact: false })).toBeInTheDocument();
    expect(await screen.findByText('8', { selector: 'span', exact: false })).toBeInTheDocument();
    waitFor(() =>
      expect(screen.findAllByText('Más colores', { selector: 'button' })).toBeInTheDocument(),
    );
    waitFor(() => expect(screen.findByText('Añadir', { selector: 'button' })).toBeInTheDocument());

    expect(loader).toBeUndefined();
  });
});

describe('when user blurs/focus textfild and put text in textfild', () => {
  it('input search bar must filter result products', async () => {
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

describe('when user click button plus/minus', () => {
  it('products have to be sort ascendant or descendant', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>,
    );

    expect(await screen.findByText('Polo Shirt classic', { selector: 'span' })).toBeInTheDocument();
    const cardList = expect(await screen.findByRole('card-list'));

    const button = screen.getByRole('button-ascendant');

    fireEvent.click(button);
  });
});
