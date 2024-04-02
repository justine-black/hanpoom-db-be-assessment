import { DateScalarMode, Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  VirtualColumn,
} from 'typeorm';
import { PickingSlipStatus } from 'src/enums/picking_slip_status.enum';
import { PickingSlipDate } from 'src/picking_slip_dates/entities/picking_slip_date.entity';

@Entity('picking_slips')
@ObjectType('PickingSlip')
export class PickingSlip {
  @PrimaryColumn({ name: 'id', type: 'bigint', width: 20 })
  @Field(() => String)
  id: String;

  @Column({ name: 'order_id', type: 'bigint', width: 20 })
  @Field(() => String)
  orderId: String;

  @Column({ name: 'order_fulfillment_order_id', type: 'bigint', width: 20 })
  @Field(() => String)
  orderFulfillmentOrderId: String;

  @Column({ name: 'is_contained_single_product', type: 'tinyint', width: 1 })
  @Field(() => Int)
  isContainedSingleProduct: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field(() => Date)
  createdAt: Date;

  @OneToOne(
    () => PickingSlipDate,
    (pickingSlipDate) => pickingSlipDate.pickingSlip,
  )
  @Field(() => PickingSlipDate, { nullable: true })
  pickingSlipDate: PickingSlipDate;

  @Field((type) => PickingSlipStatus, { nullable: true })
  status: PickingSlipStatus;
}
