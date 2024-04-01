// import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';
// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   PrimaryColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity('picking_slip_items')
// export class PickingSlipItem {
//   @PrimaryColumn({ name: 'id', type: 'bigint', width: 20 })
//   id: number;

//   @ManyToOne(() => PickingSlip)
//   @JoinColumn({ name: 'picking_slip_id' })
//   pickingSlip: PickingSlip;

//   @Column({ name: 'item_id', type: 'bigint', width: 20 })
//   itemId: number;

//   @Column({ name: 'stock_id', type: 'bigint', width: 20 })
//   stockId: number;

//   @Column({ name: 'order_fulfillment_product_id', type: 'bigint', width: 20 })
//   orderFulfillmentProductId: number;

//   @Column({ name: 'quantity', type: 'int', width: 11 })
//   quantity: number;

//   @Column({ name: 'refunded_quantity', type: 'int', width: 11 })
//   refundedQuantity: number;

//   @Column({ name: 'location_id', type: 'bigint', width: 20 })
//   locationId: number;

//   @Column({ name: 'location_code', type: 'varchar', length: 30 })
//   locationCode: string;

//   @Column({ name: 'is_pre_order', type: 'tinyint', width: 1 })
//   isPreOrder: number;

//   @Column({ name: 'is_sales_only', type: 'tinyint', width: 1 })
//   isSalesOnly: number;

//   @Column({
//     name: 'pre_order_shipping_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   preOrderShippingAt: Date;

//   @Column({
//     name: 'pre_order_deadline_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   preOrderDeadlineAt: Date;

//   @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
//   createdAt: Date;

//   @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
//   updatedAt: Date;
// }
