import { Order } from './../models/order.entity';
import { OrderService } from './order.service';
import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

@Crud({
    model: {
        type: Order
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
@Controller('orders')
export class OrderController {
    constructor(public service: OrderService) {}
}
