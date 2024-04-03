import { Injectable } from '@nestjs/common';
import { CreatePickingSlipInput } from './dto/create-picking_slip.input';
import { UpdatePickingSlipInput } from './dto/update-picking_slip.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { PickingSlip } from './entities/picking_slip.entity';
import { PickingSlipStatus } from 'src/enums/picking_slip_status.enum';
import { PickingSlipDate } from 'src/picking_slip_dates/entities/picking_slip_date.entity';
import { PickingSlipItem } from 'src/picking_slip_items/entities/picking_slip_item.entity';

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

  async findAll(
    limit: number,
    status: PickingSlipStatus,
    hasPreOrderItem: Boolean,
  ) {
    const queryBuilder: SelectQueryBuilder<PickingSlip> =
      this.pickingSlipsRepository.createQueryBuilder('pickingSlip');

    queryBuilder
      .leftJoinAndSelect('pickingSlip.pickingSlipDate', 'pickingSlipDate')
      .leftJoinAndSelect('pickingSlip.pickingSlipItems', 'pickingSlipItems');

    switch (status) {
      case PickingSlipStatus.NOT_PRINTED:
        queryBuilder
          .where('pickingSlipDate.printed_at IS NULL')
          .andWhere('pickingSlipDate.inspected_at IS NULL')
          .andWhere('pickingSlipDate.shipped_at IS NULL')
          .andWhere('pickingSlipDate.held_at IS NULL');
        break;
      case PickingSlipStatus.PRINTED:
        queryBuilder
          .where('pickingSlipDate.printed_at IS NOT NULL')
          .andWhere('pickingSlipDate.inspected_at IS NULL')
          .andWhere('pickingSlipDate.shipped_at IS NULL')
          .andWhere('pickingSlipDate.held_at IS NULL');
        break;
      case PickingSlipStatus.HELD:
        queryBuilder.where('pickingSlipDate.held_at IS NOT NULL');
        break;
      default:
        break;
    }

    if (hasPreOrderItem === true) {
      queryBuilder.andWhere(
        'exists (select 1 from picking_slip_items where is_pre_order = 1 and picking_slip_id = pickingSlip.id)',
      );
    } else if (hasPreOrderItem === false) {
      queryBuilder.andWhere(
        'not exists (select 1 from picking_slip_items where is_pre_order = 1 and picking_slip_id = pickingSlip.id)',
      );
    }

    queryBuilder.orderBy('pickingSlip.created_at', 'DESC').limit(limit);

    return await queryBuilder.getMany();
  }

  async findOne(id: String) {
    return await this.pickingSlipsRepository.findOne({
      where: { id: id },
      relations: ['pickingSlipDate', 'pickingSlipItems'],
    });
  }

  update(id: number, updatePickingSlipInput: UpdatePickingSlipInput) {
    return `This action updates a #${id} pickingSlip`;
  }

  remove(id: number) {
    return `This action removes a #${id} pickingSlip`;
  }

  calculateStatus(pickingSlipDate: PickingSlipDate): PickingSlipStatus {
    const printedAt = pickingSlipDate.printedAt;
    const inspectedAt = pickingSlipDate.inspectedAt;
    const shippedAt = pickingSlipDate.shippedAt;
    const heldAt = pickingSlipDate.heldAt;

    if (!printedAt && !inspectedAt && !shippedAt && !heldAt) {
      return PickingSlipStatus.NOT_PRINTED;
    } else if (!!printedAt && !inspectedAt && !shippedAt && !heldAt) {
      return PickingSlipStatus.PRINTED;
    } else if (!!heldAt) {
      return PickingSlipStatus.HELD;
    } else {
      return PickingSlipStatus.OTHERS;
    }
  }

  async hasPreOrderItem(pickingSlipItems: [PickingSlipItem]): Promise<Boolean> {
    return pickingSlipItems.some((item) => item.isPreOrder === 1) || false;
  }
}
