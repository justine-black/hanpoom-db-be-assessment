import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PickingSlipDatesService } from './picking_slip_dates.service';
import { PickingSlipDate } from './entities/picking_slip_date.entity';
import { CreatePickingSlipDateInput } from './dto/create-picking_slip_date.input';
import { UpdatePickingSlipDateInput } from './dto/update-picking_slip_date.input';

@Resolver(() => PickingSlipDate)
export class PickingSlipDatesResolver {
  constructor(private readonly pickingSlipDatesService: PickingSlipDatesService) {}

  @Mutation(() => PickingSlipDate)
  createPickingSlipDate(@Args('createPickingSlipDateInput') createPickingSlipDateInput: CreatePickingSlipDateInput) {
    return this.pickingSlipDatesService.create(createPickingSlipDateInput);
  }

  @Query(() => [PickingSlipDate], { name: 'pickingSlipDates' })
  findAll() {
    return this.pickingSlipDatesService.findAll();
  }

  @Query(() => PickingSlipDate, { name: 'pickingSlipDate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pickingSlipDatesService.findOne(id);
  }

  @Mutation(() => PickingSlipDate)
  updatePickingSlipDate(@Args('updatePickingSlipDateInput') updatePickingSlipDateInput: UpdatePickingSlipDateInput) {
    return this.pickingSlipDatesService.update(updatePickingSlipDateInput.id, updatePickingSlipDateInput);
  }

  @Mutation(() => PickingSlipDate)
  removePickingSlipDate(@Args('id', { type: () => Int }) id: number) {
    return this.pickingSlipDatesService.remove(id);
  }
}
