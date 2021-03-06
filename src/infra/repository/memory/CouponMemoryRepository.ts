import Coupon from '../../../domain/entity/coupon/Coupon';
import CouponRepository from '../../../domain/repository/CouponRepository';

export default class CouponMemoryRepository implements CouponRepository {

  private coupons: Coupon[] = [
    new Coupon("VALE20", 20),
    new Coupon("VALE10", 10, new Date('1996-10-10'))
  ]

  findById(id: string): Promise<Coupon | undefined>
  {
    for(const coupon of this.coupons) {
      if(coupon.id === id) return Promise.resolve(coupon);
    }
    return Promise.resolve(undefined);
  }
}
