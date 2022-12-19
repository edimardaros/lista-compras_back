import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { List } from 'src/list/entities/list.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column()
  password: string;

  @Column()
  active: boolean;

  @OneToMany(() => List, (list) => list.account)
  list: List[];
}
