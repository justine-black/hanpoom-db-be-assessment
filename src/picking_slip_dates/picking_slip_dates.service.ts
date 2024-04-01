import { Injectable } from '@nestjs/common';
import { CreatePickingSlipDateInput } from './dto/create-picking_slip_date.input';
import { UpdatePickingSlipDateInput } from './dto/update-picking_slip_date.input';

@Injectable()
export class PickingSlipDatesService {
  create(createPickingSlipDateInput: CreatePickingSlipDateInput) {
    return 'This action adds a new pickingSlipDate';
  }

  findAll() {
    return `This action returns all pickingSlipDates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pickingSlipDate`;
  }

  update(id: number, updatePickingSlipDateInput: UpdatePickingSlipDateInput) {
    return `This action updates a #${id} pickingSlipDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} pickingSlipDate`;
  }
}
