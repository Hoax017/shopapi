import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { BasketsService } from './baskets.service';
import { Basket } from './basket.entity';
import { AuthService } from '../auth/auth.service';
import { ProductsService } from '../products/products.service';
import { AddDto } from './dto/add.dto';

@Controller('baskets')
export class BasketsController {
  constructor(
    private service: BasketsService,
    private authService: AuthService,
    private productService: ProductsService,
  ) {}
  @UseGuards(AuthGuard)
  @Get()
  find(): Basket {
    return this.service.find(this.authService.currentUserId);
  }
  @Put('add')
  async add(@Body() basket: AddDto): Promise<Basket> {
    if (basket.userId !== this.authService.currentUserId)
      throw new BadRequestException('Invalid user');
    this.service.addToBasket(
      this.authService.currentUserId,
      await this.productService.find(basket.productId),
    );
    return this.find();
  }
}
