import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { UsersModule } from './users/users.module';
import {ProductsModule} from "./products/products.module";
import {CategoriesModule} from "./categories/categories.module";

@Module({
	imports: [
		UsersModule,
		ProductsModule,
		CategoriesModule,
		TypeOrmModule.forRoot({
			type: 'sqlite',
			database: 'DATABASE.sqlite',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true,
		})
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
