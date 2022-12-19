import { Injectable } from '@nestjs/common';
import { CreateItemListDto } from './dto/create-item-list.dto';
import { UpdateItemListDto } from './dto/update-item-list.dto';

@Injectable()
export class ItemListService {
  create(createItemListDto: CreateItemListDto) {
    return 'This action adds a new itemList';
  }

  findAll() {
    return `This action returns all itemList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemList`;
  }

  update(id: number, updateItemListDto: UpdateItemListDto) {
    return `This action updates a #${id} itemList`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemList`;
  }
}
