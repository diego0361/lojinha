import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    document: string

    @Column()
    password: string

    @Column()
    phone: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    update_at: string
}
export default User;