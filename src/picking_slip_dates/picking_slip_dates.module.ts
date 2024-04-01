import { Module } from '@nestjs/common';
import { PickingSlipDatesService } from './picking_slip_dates.service';
import { PickingSlipDatesResolver } from './picking_slip_dates.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickingSlipDate } from './entities/picking_slip_date.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickingSlipDate])],
  providers: [PickingSlipDatesResolver, PickingSlipDatesService],
})
export class PickingSlipDatesModule {}
