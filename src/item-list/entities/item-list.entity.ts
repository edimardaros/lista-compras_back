import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { List } from 'src/list/entities/list.entity';

@Entity()
export class ItemList {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => List, (list) => list.item)
  @JoinColumn({ name: 'list_id' })
  list: List;

  @Column()
  item_desc: string;

  @Column()
  qtd: number;

  @Column()
  value: number;

  @Column('boolean', { default: false })
  promotion: boolean;

  @Column('boolean', { default: false })
  status: boolean;
}
