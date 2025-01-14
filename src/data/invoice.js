export const invoice = {
  id: 1,
  name: "Componentes PC",
  client: {
    name: "Jose",
    lastName: "Doe",
    address: {
      country: "USA",
      city: "New York",
      street: "123 Main St",
      number: 12,
    },
  },
  company: {
    name: "New Egg",
    fiscalNumber: 123456789,
  },
  items: [
    {
      product: 'CPU Intel Core I7',
      price: 499,
      quantity: 1,
    },
    {
      product: 'Corsair Keyboard Mecanico',
      price: 150,
      quantity: 1,
    },
    {
      product: 'Monitor ASUS',
      price: 300,
      quantity: 1,
    }
  ]
}