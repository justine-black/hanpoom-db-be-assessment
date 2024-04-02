import { Resolver, Mutation } from '@nestjs/graphql';
import {
  PickingSlipSeederService,
  PickingSlipDateSeederService,
  PickingSlipItemSeederService,
} from './seeder.service';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';

@Resolver(() => PickingSlip)
export class PickingSlipsResolver {
  constructor(
    private readonly pickingSlipSeederService: PickingSlipSeederService,
    private readonly pickingSlipItemSeederService: PickingSlipItemSeederService,
  ) {}

  @Mutation(() => String, { name: 'seedPickingSlips' })
  async seedPickingSlips() {
    try {
      await this.pickingSlipSeederService.seedFromCSV(
        'src/seeder/data/picking_slips.csv',
      );
      return 'Seeding picking_slips data successful';
    } catch (error) {
      return 'Seeding picking_slips data failed';
    }
  }

  @Mutation(() => String, { name: 'seedPickingSlipDates' })
  async seedPickingSlipDates() {
    try {
      await this.pickingSlipItemSeederService.seedFromCSV(
        'src/seeder/data/picking_slip_dates.csv',
      );
      return 'Seeding picking_slip_dates data successful';
    } catch (error) {
      return 'Seeding picking_slip_dates data failed';
    }
  }

  @Mutation(() => String, { name: 'seedPickingSlipItems' })
  async seedPickingSlipItems() {
    try {
      await this.pickingSlipItemSeederService.seedFromCSV(
        'src/seeder/data/picking_slip_items.csv',
      );
      return 'Seeding picking_slip_items data successful';
    } catch (error) {
      return 'Seeding picking_slip_items data failed';
    }
  }
}
