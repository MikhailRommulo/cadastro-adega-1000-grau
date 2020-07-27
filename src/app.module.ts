import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClientModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
