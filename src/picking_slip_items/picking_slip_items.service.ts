import { Injectable } from '@nestjs/common';
import { CreatePickingSlipItemInput } from './dto/create-picking_slip_item.input';
import { UpdatePickingSlipItemInput } from './dto/update-picking_slip_item.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { PickingSlipItem } from './entities/picking_slip_item.entity';

@Injectable()
export class PickingSlipItemsService {
  constructor(
    @InjectRepository(PickingSlipItem)
    private readonly pickingSlipItemsRepository: Repository<PickingSlipItem>,
    private readonly entityManager: EntityManager,
  ) {}
  create(createPickingSlipItemInput: CreatePickingSlipItemInput) {
    return 'This action adds a new pickingSlipItem';
  }

  async findAll(limit?: number) {
    return await this.pickingSlipItemsRepository.find({
      take: limit,
      relations: ['pickingSlip'],
    });
  }

  async findOne(id: String) {
    return await this.pickingSlipItemsRepository.findOne({
      where: { id: id },
      relations: ['pickingSlip'],
    });
  }

  update(id: number, updatePickingSlipItemInput: UpdatePickingSlipItemInput) {
    return `This action updates a #${id} pickingSlipItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} pickingSlipItem`;
  }
}
