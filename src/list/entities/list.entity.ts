import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import { ItemList } from 'src/item-list/entities/item-list.entity';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desc: string;

  @Column()
  account_id: string;

  @ManyToOne(() => Account, (account) => account.list)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @OneToMany(() => ItemList, (itemList) => itemList.list)
  item: ItemList[];
}
