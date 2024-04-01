import { Resolver, Mutation } from '@nestjs/graphql';
import { PickingSlipSeederService } from './seeder.service';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';

@Resolver(() => PickingSlip)
export class PickingSlipsResolver {
  constructor(
    private readonly pickingSlipSeederService: PickingSlipSeederService,
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
}
