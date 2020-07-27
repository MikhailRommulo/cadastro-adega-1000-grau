import { Client } from './client.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Column } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Client, client => client.orders)
    client: Client

    @Column({type: 'float4'})
    value: number

    @CreateDateColumn({type: 'timestamp'})
    dateOfOrder: Date
}