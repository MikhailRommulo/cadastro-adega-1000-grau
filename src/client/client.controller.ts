import { ClientService } from './client.service';
import { Client } from './../models/client.entity';
import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

@Crud({
    model: {
        type: Client
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
})
@Controller('clients')
export class ClientController {
    constructor(public service: ClientService) {}
}
