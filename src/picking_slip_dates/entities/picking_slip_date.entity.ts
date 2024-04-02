import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('picking_slip_dates')
@ObjectType('PickingSlipDate')
export class PickingSlipDate {
  @PrimaryColumn({ name: 'id', type: 'bigint', width: 20 })
  @Field(() => String)
  id: String;

  @OneToOne(() => PickingSlip)
  @JoinColumn({ name: 'picking_slip_id' })
  @Field(() => PickingSlip)
  pickingSlip: PickingSlip;

  @Column({
    name: 'printed_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  printedUsername: string;

  @Column({
    name: 'inspected_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  inspectedUsername: string;

  @Column({
    name: 'packed_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  packedUsername: string;

  @Column({
    name: 'shipped_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  shippedUsername: string;

  @Column({
    name: 'held_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  heldUsername: string;

  @Column({
    name: 'cancelled_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  cancelledUsername: string;

  @Column({
    name: 'refunded_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  refundedUsername: string;

  @Column({
    name: 'confirmed_username',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @Field(() => String)
  confirmedUsername: string;

  @Column({
    name: 'printed_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  printedAt: Date;

  @Column({
    name: 'inspected_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  inspectedAt: Date;

  @Column({
    name: 'packed_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  packedAt: Date;

  @Column({
    name: 'shipped_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  shippedAt: Date;

  @Column({
    name: 'delivered_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  deliveredAt: Date;

  @Column({
    name: 'returned_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  returnedAt: Date;

  @Column({
    name: 'cancelled_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  cancelledAt: Date;

  @Column({
    name: 'refunded_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  refundedAt: Date;

  @Column({
    name: 'held_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  heldAt: Date;

  @Column({
    name: 'confirmed_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @Field(() => Date)
  confirmedAt: Date;

  @Column({ name: 'held_reason', type: 'varchar', length: 20, nullable: true })
  @Field(() => String)
  heldReason: string;
}
