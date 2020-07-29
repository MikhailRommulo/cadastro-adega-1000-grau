import { Client } from './client.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Column } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Client, client => client.orders, {onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    client: Client

    @Column({type: 'float4'})
    value: number

    @CreateDateColumn({type: 'timestamp with time zone'})
    dateOfOrder: Date
}