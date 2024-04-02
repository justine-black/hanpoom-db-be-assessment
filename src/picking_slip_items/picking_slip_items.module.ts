import { Module } from '@nestjs/common';
import { PickingSlipItemsService } from './picking_slip_items.service';
import { PickingSlipItemsResolver } from './picking_slip_items.resolver';

@Module({
  providers: [PickingSlipItemsResolver, PickingSlipItemsService],
})
export class PickingSlipItemsModule {}
