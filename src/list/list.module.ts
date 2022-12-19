import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { List } from './entities/list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ListController],
  imports: [TypeOrmModule.forFeature([List])],
  providers: [ListService],
})
export class ListModule {}
