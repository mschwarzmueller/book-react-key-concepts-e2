const STATUS = {
  SHIPPED: 'shipped',
  PENDING: 'pending',
  DELAYED: 'delayed',
};

const orders = [
  {
    id: 'o1',
    date: '2025-07-14T15:23:44.557Z',
    products: [
      {
        id: 'p1',
        title: 'React - Complete Guide (Course)',
        price: 18.99,
        quantity: 2,
      },
      {
        id: 'p8',
        title: 'Focus Glasses',
        price: 28.29,
        quantity: 1,
      },
    ],
    status: STATUS.SHIPPED,
  },
  {
    id: 'o2',
    date: '2025-06-11T11:52:23.557Z',
    products: [
      {
        id: 'p2',
        title: 'Red Carpet',
        price: 539.99,
        quantity: 1,
      },
    ],
    status: STATUS.SHIPPED,
  },
  {
    id: 'o3',
    date: '2025-07-16T13:29:01.007Z',
    products: [
      {
        id: 'p5',
        title: 'Tallest Mountains - 1999 Edition',
        price: 68.99,
        quantity: 1,
      },
      {
        id: 'p12',
        title: 'Expert Hiking - South Europe Edition',
        price: 30.69,
        quantity: 1,
      },
    ],
    status: STATUS.DELAYED,
  },
  {
    id: 'o4',
    date: '2025-05-28T18:47:12.007Z',
    products: [
      {
        id: 'p6',
        title: 'Modern Development (Book)',
        price: 58.99,
        quantity: 3,
      },
      {
        id: 'p3',
        title: 'Building Teams - Again & Again',
        price: 78.89,
        quantity: 1,
      },
    ],
    status: STATUS.SHIPPED,
  },
  {
    id: 'o5',
    date: '2025-08-01T09:15:22.040Z',
    products: [
      {
        id: 'p18',
        title: 'Ergonomic Keyboard',
        price: 121.39,
        quantity: 1,
      },
    ],
    status: STATUS.PENDING,
  },
  {
    id: 'o6',
    date: '2025-08-02T10:10:19.555Z',
    products: [
      {
        id: 'p1',
        title: 'React - Complete Guide (Course)',
        price: 15.99,
        quantity: 1,
      },
      {
        id: 'p18',
        title: 'Ergonomic Keyboard',
        price: 121.39,
        quantity: 1,
      },
    ],
    status: STATUS.PENDING,
  },
];

export function getOrderById(id) {
  return { ...orders.find((order) => order.id === id) };
}

export function getOrderSummaryData(orderId) {
  const order = getOrderById(orderId);

  let totalExp = 0;
  let quantity = 0;

  for (const product of order.products) {
    totalExp += product.price * product.quantity;
    quantity += product.quantity;
  }

  return { total: totalExp, quantity };
}

export function getOrdersSummaryData(orderId) {
  let totalExp = 0;
  let quantity = 0;

  for (const order of orders) {
    if (orderId && order.id !== orderId) {
      continue;
    }
    for (const product of order.products) {
      totalExp += product.price * product.quantity;
      quantity += product.quantity;
    }
  }

  return { total: totalExp, quantity };
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default orders;
