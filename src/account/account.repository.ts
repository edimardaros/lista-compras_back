import { EntityRepository, Repository } from 'typeorm';
import { Account } from './entities/account.entity';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {}

// export abstract class AccountRepository extends Repository<Account> {
// export abstract class AccountRepository {
//   abstract create(email: string, password: string): Promise<void>;
// abstract save(email: string, password: string): Promise<void>;
// }
