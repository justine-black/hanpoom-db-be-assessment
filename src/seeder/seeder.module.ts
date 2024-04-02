import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickingSlipsResolver } from './seeder.resolver';
import {
  PickingSlipDateSeederService,
  PickingSlipSeederService,
} from './seeder.service';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickingSlip])],
  providers: [
    PickingSlipsResolver,
    PickingSlipSeederService,
    PickingSlipDateSeederService,
  ],
})
export class SeederModule {}
