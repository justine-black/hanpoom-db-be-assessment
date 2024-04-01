import { Module } from '@nestjs/common';
import { PickingSlipsService } from './picking_slips.service';
import { PickingSlipsResolver } from './picking_slips.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickingSlip } from './entities/picking_slip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickingSlip])],
  providers: [PickingSlipsResolver, PickingSlipsService],
})
export class PickingSlipsModule {}
