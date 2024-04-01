import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('picking_slips')
@ObjectType('PickingSlip')
export class PickingSlip {
  @PrimaryColumn({ name: 'id', type: 'bigint', width: 20 })
  @Field(() => ID)
  id: number;

  @Column({ name: 'order_id', type: 'bigint', width: 20 })
  @Field()
  orderId: number;

  @Column({ name: 'order_fulfillment_order_id', type: 'bigint', width: 20 })
  @Field()
  orderFulfillmentOrderId: number;

  @Column({ name: 'is_contained_single_product', type: 'tinyint', width: 1 })
  @Field()
  isContainedSingleProduct: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Field()
  createdAt: Date;
}
