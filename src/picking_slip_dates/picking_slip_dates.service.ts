import { Injectable } from '@nestjs/common';
import { CreatePickingSlipDateInput } from './dto/create-picking_slip_date.input';
import { UpdatePickingSlipDateInput } from './dto/update-picking_slip_date.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { PickingSlipDate } from './entities/picking_slip_date.entity';

@Injectable()
export class PickingSlipDatesService {
  constructor(
    @InjectRepository(PickingSlipDate)
    private readonly pickingSlipDatesRepository: Repository<PickingSlipDate>,
    private readonly entityManager: EntityManager,
  ) {}
  create(createPickingSlipDateInput: CreatePickingSlipDateInput) {
    return 'This action adds a new pickingSlipDate';
  }

  async findAll() {
    return await this.pickingSlipDatesRepository.find({
      relations: ['pickingSlip'],
    });
  }

  async findOne(id: String) {
    return await this.pickingSlipDatesRepository.findOneBy({ id });
  }

  update(id: number, updatePickingSlipDateInput: UpdatePickingSlipDateInput) {
    return `This action updates a #${id} pickingSlipDate`;
  }

  remove(id: number) {
    return `This action removes a #${id} pickingSlipDate`;
  }
}
