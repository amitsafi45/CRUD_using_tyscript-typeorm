import {Entity,Column,BaseEntity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export default class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    "id":number
    
    @Column()
    "name":string;
    @Column()
    "age":number;
    @Column()
    "Address":string



}