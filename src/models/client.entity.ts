import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { IsEmail } from 'class-validator'
import { Order } from './order.entity'

@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 13})
    phoneContact: string
    
    @Column({length: 65, nullable: true})
    @IsEmail()
    email: string

    @OneToMany(() => Order, order => order.client)
    orders: Order[]
}