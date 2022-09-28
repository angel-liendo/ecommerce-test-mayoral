const { gql, ApolloServer } = require('apollo-server');

const DATA_ITEMS = [
  {
    id: '22',
    title: 'Polo Shirt classic',
    img: '2342444324443324443442r.PNG',
    price: 22.99,
    discount: 12.5,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '33',
    title: 'Polo Shirt long blue estampa 1325',
    img: '34444a4545445232.PNG',
    price: 182.99,
    discount: null,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '44',
    title: 'Sueter cashmere green',
    img: '234244sdsd443324443442reewe.PNG',
    price: 41.99,
    discount: 21.81,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '55',
    title: 'Polo Shirt long blue',
    img: '234244443323442r.PNG',
    price: 52.99,
    discount: null,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '66',
    title: 'Polo Shirt long',
    img: '2342444433234423ererrewrwe.PNG',
    price: 62.99,
    discount: null,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '77',
    title: 'Polo Shirt red',
    img: '234244443324443442r.PNG',
    price: 32.99,
    discount: 15.88,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '88',
    title: 'Polo Shirt blue',
    img: '234244443324443442reewe.PNG',
    price: 20.99,
    discount: 10,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '9999',
    title: 'Sueter cashmere gray',
    img: '234244343443324443442reewe.PNG',
    price: 100.99,
    discount: 50.1,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '99923',
    title: 'Polo shirt gray',
    img: '234244sdsd443324443442reewe.PNG',
    price: 102.99,
    discount: null,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '11111654',
    title: 'Shirt Blue',
    img: '234234234rewwerrwe.PNG',
    price: 137.99,
    discount: 100.99,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },

  {
    id: '555',
    title: 'Polo Shirt long blue 2',
    img: '234244443323442r.PNG',
    price: 50.99,
    discount: null,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '666',
    title: 'Polo Shirt long 22',
    img: '2342444433234423ererrewrwe.PNG',
    price: 66.99,
    discount: null,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '777',
    title: 'Polo Shirt red 22',
    img: '234244443324443442r.PNG',
    price: 27.99,
    discount: 13.88,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '888',
    title: 'Polo Shirt blue 22',
    img: '234244443324443442reewe.PNG',
    price: 20.99,
    discount: 9,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '99923333',
    title: 'Polo shirt gray 22',
    img: '234244sdsd443324443442reewe.PNG',
    price: 104.99,
    discount: null,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
  {
    id: '11113331654',
    title: 'Shirt Blue 22',
    img: '234234234rewwerrwe.PNG',
    price: 109.99,
    discount: 99.99,
    colors: [{ id: '2', name: 'blue', value: '#2062B0' }],
  },
];

const typeDefs = gql`
  type Colors {
    id: ID!
    name: String!
    value: String!
  }
  type Products {
    id: ID!
    title: String!
    img: String!
    price: Float!
    discount: Float
    colors: [Colors]
  }
  type Query {
    allProducts: [Products]!
    findProduct(id: ID!): Products
  }
`;

const resolvers = {
  Query: {
    allProducts: () => DATA_ITEMS,
    findProduct: (root, args) => {
      const { id } = args;
      return DATA_ITEMS.find((item) => item.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
