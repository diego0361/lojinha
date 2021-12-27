import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column()
    name: string

    @Column()
    shelf_life: string

    @Column()
    price: number

    @Column()
    brand: string

    @Column()
    stock: number

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    update_at: string
}
export default Product;