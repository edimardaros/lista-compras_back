import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AccountRepository } from './account.repository';
import { Account } from './entities/account.entity';
import { ListService } from 'src/list/list.service';
import { List } from 'src/list/entities/list.entity';

@Module({
  controllers: [AccountController],
  imports: [TypeOrmModule.forFeature([Account, List])],
  providers: [AccountService, ListService],
})
export class AccountModule {}
