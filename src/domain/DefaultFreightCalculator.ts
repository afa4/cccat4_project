import FreightCalculator from './FreightCalculator';
import Item from './Item';

const MINIMUM_FREIGHT = 10;

export default class DefaultFreightCalculator implements FreightCalculator {
  
  calculate(item: Item, quantity: number = 1, distance: number = 1000): number {
    const shippingTotal = distance * item.volume.getVolume() * (item.volume.getDensity() / 100) * quantity;
    return (shippingTotal < MINIMUM_FREIGHT) ? MINIMUM_FREIGHT : shippingTotal; 
  }
}