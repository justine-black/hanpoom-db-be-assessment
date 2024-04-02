import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('picking_slip_items')
@ObjectType('PickingSlipItem')
export class PickingSlipItem {
  @PrimaryColumn({ name: 'id', type: 'bigint', width: 20 })
  @Field(() => String)
  id: String;

  @ManyToOne(() => PickingSlip)
  @JoinColumn({ name: 'picking_slip_id' })
  @Field(() => PickingSlip)
  pickingSlip: PickingSlip;

  @Column({ name: 'item_id', type: 'bigint', width: 20 })
  @Field(() => String)
  itemId: String;

  @Column({ name: 'stock_id', type: 'bigint', width: 20, nullable: true })
  @Field(() => String)
  stockId: String;

  @Column({ name: 'order_fulfillment_product_id', type: 'bigint', width: 20 })
  @Field(() => String)
  orderFulfillmentProductId: String;

  @Column({ name: 'quantity', type: 'int', width: 11 })
  @Field(() => Int)
  quantity: number;

  @Column({ name: 'refunded_quantity', type: 'int', width: 11 })
  @Field(() => Int)
  refundedQuantity: number;

  @Column({ name: 'location_id', type: 'bigint', width: 20, nullable: true })
  @Field(() => String)
  locationId: number;

  @Column({
    name: 'location_code',
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  @Field(() => String)
  locationCode: string;

  @Column({ name: 'is_pre_order', type: 'tinyint', width: 1 })
  @Field(() => Int)
  isPreOrder: number;

  @Column({ name: 'is_sales_only', type: 'tinyint', width: 1 })
  @Field(() => Int)
  isSalesOnly: number;

  @Column({
    name: 'pre_order_shipping_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  preOrderShippingAt: Date;

  @Column({
    name: 'pre_order_deadline_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  preOrderDeadlineAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  @Field(() => Date)
  updatedAt: Date;
}
