// import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';
// import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

// @Entity('picking_slip_dates')
// export class PickingSlipDate {
//   @PrimaryColumn({ name: 'id', type: 'bigint', width: 20 })
//   id: number;

//   @OneToOne(() => PickingSlip)
//   @JoinColumn({ name: 'picking_slip_id' })
//   pickingSlip: PickingSlip;

//   @Column({ name: 'printed_username', type: 'varchar', length: 20 })
//   printedUsername: string;

//   @Column({ name: 'inspected_username', type: 'varchar', length: 20 })
//   inspectedUsername: string;

//   @Column({ name: 'packed_username', type: 'varchar', length: 20 })
//   packedUsername: string;

//   @Column({ name: 'shipped_username', type: 'varchar', length: 20 })
//   shippedUsername: string;

//   @Column({ name: 'held_username', type: 'varchar', length: 20 })
//   heldUsername: string;

//   @Column({ name: 'cancelled_username', type: 'varchar', length: 20 })
//   cancelledUsername: string;

//   @Column({ name: 'refunded_username', type: 'varchar', length: 20 })
//   refundedUsername: string;

//   @Column({ name: 'confirmed_username', type: 'varchar', length: 20 })
//   confirmedUsername: string;

//   @Column({
//     name: 'printed_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   printedAt: Date;

//   @Column({
//     name: 'inspected_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   inspectedAt: Date;

//   @Column({
//     name: 'packed_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   packedAt: Date;

//   @Column({
//     name: 'shipped_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   shippedAt: Date;

//   @Column({
//     name: 'delivered_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   deliveredAt: Date;

//   @Column({
//     name: 'returned_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   returnedAt: Date;

//   @Column({
//     name: 'cancelled_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   cancelledAt: Date;

//   @Column({
//     name: 'refunded_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   refundedAt: Date;

//   @Column({
//     name: 'held_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   heldAt: Date;

//   @Column({
//     name: 'confirmed_at',
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP',
//   })
//   confirmedAt: Date;

//   @Column({ name: 'held_reason', type: 'varchar', length: 20 })
//   heldReason: string;
// }
