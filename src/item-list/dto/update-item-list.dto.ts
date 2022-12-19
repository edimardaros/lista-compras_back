import { PartialType } from '@nestjs/mapped-types';
import { CreateItemListDto } from './create-item-list.dto';

export class UpdateItemListDto extends PartialType(CreateItemListDto) {}
