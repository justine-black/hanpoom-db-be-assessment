import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PickingSlipsModule } from './picking_slips/picking_slips.module';
import { SeederModule } from './seeder/seeder.module';
import { PickingSlipDatesModule } from './picking_slip_dates/picking_slip_dates.module';
import { PickingSlipItemsModule } from './picking_slip_items/picking_slip_items.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      driver: ApolloDriver,
      context: ({ req }) => ({ req }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    SeederModule,
    PickingSlipsModule,
    PickingSlipDatesModule,
    PickingSlipItemsModule,
  ],
})
export class AppModule {}
