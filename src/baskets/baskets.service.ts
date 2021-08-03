import { Injectable } from '@nestjs/common';
import { Basket } from './basket.entity';
import { Product } from '../products/product.entity';

@Injectable()
export class BasketsService {
  private currentBaskets: Basket[] = [];
  find(userId: number): Basket {
    let currentBaskets = this.currentBaskets.find(
      (basket) => basket.userId == userId,
    );
    if (!currentBaskets) {
      currentBaskets = new Basket();
      currentBaskets.userId = userId;
    }
    return currentBaskets;
  }
  addToBasket(userId: number, product: Product): void {
    let basket = this.find(userId);
    if (!basket) {
      basket = new Basket();
      basket.userId = userId;
    }
    const alreadyExistProduct = basket.products.find(
      (p: Product) => product.id === p.id,
    );
    if (alreadyExistProduct) {
      basket.quantities[product.id]++;
    } else {
      basket.quantities[product.id] = 1;
      basket.products.push(product);
    }
    this.currentBaskets = [
      basket,
      ...this.currentBaskets.filter((basket) => basket.userId !== userId),
    ];
  }
}
