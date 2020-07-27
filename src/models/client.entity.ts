import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { Order } from './order.entity'

@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 13})
    phoneContact: string
    
    @Column({nullable: true})
    email: string

    @OneToMany(() => Order, order => order.client)
    orders: Order[]
}