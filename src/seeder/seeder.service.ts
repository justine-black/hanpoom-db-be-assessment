import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { EntityManager, Repository } from 'typeorm';
import { PickingSlip } from 'src/picking_slips/entities/picking_slip.entity';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class PickingSlipSeederService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    @InjectRepository(PickingSlip)
    private readonly pickingSlipsRepository: Repository<PickingSlip>,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async seedFromCSV(csvFilePath: string): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    const pickingSlips: PickingSlip[] = [];

    // Create a readable stream to read the CSV file
    const readStream = fs.createReadStream(csvFilePath);

    // Pipe the read stream through the csv-parser
    readStream
      .pipe(csv())
      .on('data', async (row) => {
        // Process each row of the CSV file
        const pickingSlip = new PickingSlip();
        pickingSlip.id = row.id;
        pickingSlip.orderId = row.order_id;
        pickingSlip.orderFulfillmentOrderId = row.order_fulfillment_order_id;
        pickingSlip.isContainedSingleProduct = parseInt(
          row.is_contained_single_product,
        );
        pickingSlip.createdAt = row.created_at;
        console.log(pickingSlip);
        pickingSlips.push(pickingSlip);
      })
      .on('end', async () => {
        try {
          console.log('CSV File read sccessfully.');
          await this.dataSource.manager.save(pickingSlips);
          // await this.entityManager.save(pickingSlips);
        } catch (error) {
          console.error('Error saving picking slips:', error);
        }
      })
      .on('error', (error) => {
        // Handle errors that occur during processing
        console.error('Error:', error);
      });
  }
}
