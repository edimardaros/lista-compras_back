import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemListService } from './item-list.service';
import { CreateItemListDto } from './dto/create-item-list.dto';
import { UpdateItemListDto } from './dto/update-item-list.dto';

@Controller('item-list')
export class ItemListController {
  constructor(private readonly itemListService: ItemListService) {}

  @Post()
  create(@Body() createItemListDto: CreateItemListDto) {
    return this.itemListService.create(createItemListDto);
  }

  @Get()
  findAll() {
    return this.itemListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemListDto: UpdateItemListDto) {
    return this.itemListService.update(+id, updateItemListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemListService.remove(+id);
  }
}
