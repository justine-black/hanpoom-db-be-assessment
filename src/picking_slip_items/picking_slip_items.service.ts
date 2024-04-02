import { Injectable } from '@nestjs/common';
import { CreatePickingSlipItemInput } from './dto/create-picking_slip_item.input';
import { UpdatePickingSlipItemInput } from './dto/update-picking_slip_item.input';

@Injectable()
export class PickingSlipItemsService {
  create(createPickingSlipItemInput: CreatePickingSlipItemInput) {
    return 'This action adds a new pickingSlipItem';
  }

  findAll() {
    return `This action returns all pickingSlipItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pickingSlipItem`;
  }

  update(id: number, updatePickingSlipItemInput: UpdatePickingSlipItemInput) {
    return `This action updates a #${id} pickingSlipItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} pickingSlipItem`;
  }
}
