import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Client } from 'src/models/client.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService extends TypeOrmCrudService<Client> {
    constructor(@InjectRepository(Client) clientRepository) {
        super(clientRepository);
    }
}
