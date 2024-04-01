import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PickingSlipsService } from './picking_slips.service';
import { PickingSlip } from './entities/picking_slip.entity';
import { CreatePickingSlipInput } from './dto/create-picking_slip.input';
import { UpdatePickingSlipInput } from './dto/update-picking_slip.input';

@Resolver(() => PickingSlip)
export class PickingSlipsResolver {
  constructor(private readonly pickingSlipsService: PickingSlipsService) {}

  @Mutation(() => PickingSlip)
  createPickingSlip(
    @Args('createPickingSlipInput')
    createPickingSlipInput: CreatePickingSlipInput,
  ) {
    return this.pickingSlipsService.create(createPickingSlipInput);
  }

  @Query(() => [PickingSlip], { name: 'pickingSlips' })
  findAll() {
    return this.pickingSlipsService.findAll();
  }

  @Query(() => PickingSlip, { name: 'pickingSlip' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.pickingSlipsService.findOne(id);
  }

  @Mutation(() => PickingSlip)
  updatePickingSlip(
    @Args('updatePickingSlipInput')
    updatePickingSlipInput: UpdatePickingSlipInput,
  ) {
    return this.pickingSlipsService.update(
      updatePickingSlipInput.id,
      updatePickingSlipInput,
    );
  }

  @Mutation(() => PickingSlip)
  removePickingSlip(@Args('id', { type: () => Int }) id: number) {
    return this.pickingSlipsService.remove(id);
  }
}
