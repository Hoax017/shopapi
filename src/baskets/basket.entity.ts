import { Product } from '../products/product.entity';

export class Basket {
  public userId: number;
  public products: Product[] = [];
  public quantities: { [key: number]: number } = {};
}
