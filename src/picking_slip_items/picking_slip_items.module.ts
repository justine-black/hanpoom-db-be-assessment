import { Module } from '@nestjs/common';
import { PickingSlipItemsService } from './picking_slip_items.service';
import { PickingSlipItemsResolver } from './picking_slip_items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickingSlipItem } from './entities/picking_slip_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickingSlipItem])],
  providers: [PickingSlipItemsResolver, PickingSlipItemsService],
})
export class PickingSlipItemsModule {}
