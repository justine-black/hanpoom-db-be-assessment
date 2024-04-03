import { DateScalarMode, Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { PickingSlipStatus } from 'src/enums/picking_slip_status.enum';
import { PickingSlipDate } from 'src/picking_slip_dates/entities/picking_slip_date.entity';
import { PickingSlipItem } from 'src/picking_slip_items/entities/picking_slip_item.entity';

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

  @OneToMany(
    () => PickingSlipItem,
    (pickingSlipItem) => pickingSlipItem.pickingSlip,
    { nullable: true },
  )
  @Field(() => [PickingSlipItem], { nullable: true })
  pickingSlipItems: [PickingSlipItem];

  @Field((type) => PickingSlipStatus, { nullable: true })
  status: PickingSlipStatus;

  @Field((type) => Boolean, { nullable: true })
  hasPreOrderItem: Boolean;
}
