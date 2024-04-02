import { Field, ObjectType } from '@nestjs/graphql';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('picking_slip_dates')
@ObjectType('PickingSlipDate')
export class PickingSlipDate {
  @PrimaryColumn({ name: 'id', type: 'bigint', width: 20 })
  @Field(() => String)
  id: String;

  @OneToOne(() => PickingSlip, (pickingSlip) => pickingSlip.pickingSlipDate)
  @JoinColumn({ name: 'picking_slip_id' })
  @Field(() => PickingSlip)
  pickingSlip: PickingSlip;

  @Column({
    name: 'printed_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  printedUsername: string;

  @Column({
    name: 'inspected_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  inspectedUsername: string;

  @Column({
    name: 'packed_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  packedUsername: string;

  @Column({
    name: 'shipped_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  shippedUsername: string;

  @Column({
    name: 'held_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  heldUsername: string;

  @Column({
    name: 'cancelled_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  cancelledUsername: string;

  @Column({
    name: 'refunded_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  refundedUsername: string;

  @Column({
    name: 'confirmed_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  confirmedUsername: string;

  @Column({
    name: 'printed_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  printedAt: Date;

  @Column({
    name: 'inspected_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  inspectedAt: Date;

  @Column({
    name: 'packed_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  packedAt: Date;

  @Column({
    name: 'shipped_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  shippedAt: Date;

  @Column({
    name: 'delivered_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  deliveredAt: Date;

  @Column({
    name: 'returned_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  returnedAt: Date;

  @Column({
    name: 'cancelled_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  cancelledAt: Date;

  @Column({
    name: 'refunded_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  refundedAt: Date;

  @Column({
    name: 'held_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  heldAt: Date;

  @Column({
    name: 'confirmed_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date, { nullable: true })
  confirmedAt: Date;

  @Column({ name: 'held_reason', type: 'varchar', length: 20, nullable: true })
  @Field(() => String, { nullable: true })
  heldReason: string;
}
