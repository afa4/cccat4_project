export default class OrderItem {
  constructor(
    public readonly itemId: number,
    public readonly price: number,
    public readonly quantity: number,
  ) {}

  getTotal() {
    return this.price * this.quantity;
  }
}
