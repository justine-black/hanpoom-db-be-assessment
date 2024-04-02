import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { EntityManager, Repository } from 'typeorm';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';
import { PickingSlipDate } from 'src/picking_slip_dates/entities/picking_slip_date.entity';
import { PickingSlipItem } from 'src/picking_slip_items/entities/picking_slip_item.entity';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class PickingSlipSeederService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    // @InjectRepository(PickingSlip)
    // private readonly pickingSlipsRepository: Repository<PickingSlip>,
    // @InjectEntityManager()
    // private readonly entityManager: EntityManager,
  ) {}

  async seedFromCSV(csvFilePath: string): Promise<void> {
    const pickingSlips: PickingSlip[] = [];

    const readStream = fs.createReadStream(csvFilePath);

    readStream
      .pipe(csv())
      .on('data', async (row) => {
        const pickingSlip = new PickingSlip();
        pickingSlip.id = row.id;
        pickingSlip.orderId = row.order_id;
        pickingSlip.orderFulfillmentOrderId = row.order_fulfillment_order_id;
        pickingSlip.isContainedSingleProduct = parseInt(
          row.is_contained_single_product,
        );
        pickingSlip.createdAt = row.created_at;
        pickingSlips.push(pickingSlip);
      })
      .on('end', async () => {
        try {
          console.log('CSV File read sccessfully.');
          await this.dataSource.manager.save(pickingSlips);
        } catch (error) {
          console.error('Error saving picking slips:', error);
        }
      })
      .on('error', (error) => {
        console.error('Error:', error);
      });
  }
}

@Injectable()
export class PickingSlipDateSeederService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    @InjectRepository(PickingSlip)
    private readonly pickingSlipsRepository: Repository<PickingSlip>,
  ) {}

  async seedFromCSV(csvFilePath: string): Promise<void> {
    const pickingSlipDates: PickingSlipDate[] = [];

    const readStream = fs.createReadStream(csvFilePath);

    readStream
      .pipe(csv())
      .on('data', async (row) => {
        const pickingSlipDate = new PickingSlipDate();
        pickingSlipDate.id = row.id;
        pickingSlipDate.printedUsername = row.printed_username || null;
        pickingSlipDate.inspectedUsername = row.inspected_username || null;
        pickingSlipDate.packedUsername = row.packed_username || null;
        pickingSlipDate.shippedUsername = row.shipped_username || null;
        pickingSlipDate.heldUsername = row.held_username || null;
        pickingSlipDate.cancelledUsername = row.cancelled_username || null;
        pickingSlipDate.refundedUsername = row.refunded_username || null;
        pickingSlipDate.confirmedUsername = row.confirmed_username || null;
        pickingSlipDate.printedAt = row.printed_at || null;
        pickingSlipDate.inspectedAt = row.inspected_at || null;
        pickingSlipDate.packedAt = row.packed_at || null;
        pickingSlipDate.shippedAt = row.shipped_at || null;
        pickingSlipDate.deliveredAt = row.delivered_at || null;
        pickingSlipDate.returnedAt = row.returned_at || null;
        pickingSlipDate.cancelledAt = row.cancelled_at || null;
        pickingSlipDate.refundedAt = row.refunded_at || null;
        pickingSlipDate.heldAt = row.held_at || null;
        pickingSlipDate.confirmedAt = row.confirmed_at || null;
        pickingSlipDate.heldReason = row.held_reason || null;
        pickingSlipDate.pickingSlip = row.picking_slip_id || null;

        pickingSlipDates.push(pickingSlipDate);
      })
      .on('end', async () => {
        try {
          console.log('CSV File read sccessfully.');
          console.log(pickingSlipDates);
          await this.dataSource.manager.save(pickingSlipDates);
        } catch (error) {
          console.error('Error saving picking slips:', error);
        }
      })
      .on('error', (error) => {
        console.error('Error:', error);
      });
  }
}

@Injectable()
export class PickingSlipItemSeederService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    @InjectRepository(PickingSlip)
    private readonly pickingSlipsRepository: Repository<PickingSlip>,
  ) {}

  async seedFromCSV(csvFilePath: string): Promise<void> {
    const pickingSlipItems: PickingSlipItem[] = [];

    const readStream = fs.createReadStream(csvFilePath);

    readStream
      .pipe(csv())
      .on('data', async (row) => {
        const pickingSlipItem = new PickingSlipItem();
        pickingSlipItem.id = row.id;
        pickingSlipItem.itemId = row.item_id;
        pickingSlipItem.stockId = row.stock_id || null;
        pickingSlipItem.orderFulfillmentProductId =
          row.order_fulfillment_product_id || null;
        pickingSlipItem.quantity = parseInt(row.quantity) || 0;
        pickingSlipItem.refundedQuantity = parseInt(row.refunded_quantity) || 0;
        pickingSlipItem.locationId = row.location_id || null;
        pickingSlipItem.locationCode = row.location_code || null;
        pickingSlipItem.isPreOrder = parseInt(row.is_pre_order);
        pickingSlipItem.isSalesOnly = parseInt(row.is_sales_only);
        pickingSlipItem.preOrderShippingAt = row.pre_order_shipping_at || null;
        pickingSlipItem.preOrderDeadlineAt = row.pre_order_deadline_at || null;
        pickingSlipItem.createdAt = row.created_at || null;
        pickingSlipItem.updatedAt = row.updated_at || null;

        pickingSlipItem.pickingSlip = row.picking_slip_id;

        pickingSlipItems.push(pickingSlipItem);
      })
      .on('end', async () => {
        try {
          console.log('CSV File read sccessfully.');
          console.log(pickingSlipItems);
          await this.dataSource.manager.save(pickingSlipItems);
        } catch (error) {
          console.error('Error saving picking slips:', error);
        }
      })
      .on('error', (error) => {
        console.error('Error:', error);
      });
  }
}
