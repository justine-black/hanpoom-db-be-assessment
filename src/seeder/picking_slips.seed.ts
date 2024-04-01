import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { PickingSlipSeederService } from './seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seederService = app.get(PickingSlipSeederService);

  // Call the method to seed the database from the CSV file
  await seederService.seedFromCSV('src/seeder/data/picking_slips.csv');

  await app.close();
}
bootstrap();
