import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { List } from 'src/list/entities/list.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // email: string;

  // @Column()
  // password: string;

  // @Column()
  // active: boolean;

  // @OneToMany(() => List, (list) => list.user)
  // list: List[];
}
