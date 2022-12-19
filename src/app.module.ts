import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';
import { ItemListModule } from './item-list/item-list.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, ListModule, ItemListModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
