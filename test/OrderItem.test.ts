import OrderItem from '../src/OrderItem';

test('should create order item', () => {
  const orderItem = new OrderItem("1", 50, 2);
  expect(orderItem.getTotal()).toBe(100);
});