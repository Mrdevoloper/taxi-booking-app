import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'company' })
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string
}