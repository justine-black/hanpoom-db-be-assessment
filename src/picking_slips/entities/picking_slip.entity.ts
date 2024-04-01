import { DateScalarMode, Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  @Field(() => Date)
  createdAt: Date;
}
