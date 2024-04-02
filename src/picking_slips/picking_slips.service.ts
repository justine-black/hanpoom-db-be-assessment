import { Injectable } from '@nestjs/common';
import { CreatePickingSlipInput } from './dto/create-picking_slip.input';
import { UpdatePickingSlipInput } from './dto/update-picking_slip.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { PickingSlip } from './entities/picking_slip.entity';

@Injectable()
export class PickingSlipsService {
  constructor(
    @InjectRepository(PickingSlip)
    private readonly pickingSlipsRepository: Repository<PickingSlip>,
    private readonly entityManager: EntityManager,
  ) {}

  create(createPickingSlipInput: CreatePickingSlipInput) {
    return 'This action adds a new pickingSlip';
  }

  async findAll(limit?: number) {
    const queryBuilder: SelectQueryBuilder<PickingSlip> =
      this.pickingSlipsRepository.createQueryBuilder('pickingSlip');

    queryBuilder
      // .leftJoinAndSelect('pickingSlip.pickingSlipDate', 'pickingSlipDate')
      .limit(limit);
    return await queryBuilder.getMany();
  }

  async findOne(id: String) {
    return await this.pickingSlipsRepository.findOneBy({ id });
  }

  update(id: number, updatePickingSlipInput: UpdatePickingSlipInput) {
    return `This action updates a #${id} pickingSlip`;
  }

  remove(id: number) {
    return `This action removes a #${id} pickingSlip`;
  }
}
