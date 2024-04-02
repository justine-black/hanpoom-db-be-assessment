import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PickingSlipItemsService } from './picking_slip_items.service';
import { PickingSlipItem } from './entities/picking_slip_item.entity';
import { CreatePickingSlipItemInput } from './dto/create-picking_slip_item.input';
import { UpdatePickingSlipItemInput } from './dto/update-picking_slip_item.input';

@Resolver(() => PickingSlipItem)
export class PickingSlipItemsResolver {
  constructor(
    private readonly pickingSlipItemsService: PickingSlipItemsService,
  ) {}

  @Mutation(() => PickingSlipItem)
  createPickingSlipItem(
    @Args('createPickingSlipItemInput')
    createPickingSlipItemInput: CreatePickingSlipItemInput,
  ) {
    return this.pickingSlipItemsService.create(createPickingSlipItemInput);
  }

  @Query(() => [PickingSlipItem], { name: 'pickingSlipItems' })
  findAll(@Args('limit', { type: () => Int, nullable: true }) limit?: number) {
    return this.pickingSlipItemsService.findAll(limit);
  }

  @Query(() => PickingSlipItem, { name: 'pickingSlipItem' })
  findOne(@Args('id', { type: () => String }) id: String) {
    return this.pickingSlipItemsService.findOne(id);
  }

  @Mutation(() => PickingSlipItem)
  updatePickingSlipItem(
    @Args('updatePickingSlipItemInput')
    updatePickingSlipItemInput: UpdatePickingSlipItemInput,
  ) {
    return this.pickingSlipItemsService.update(
      updatePickingSlipItemInput.id,
      updatePickingSlipItemInput,
    );
  }

  @Mutation(() => PickingSlipItem)
  removePickingSlipItem(@Args('id', { type: () => Int }) id: number) {
    return this.pickingSlipItemsService.remove(id);
  }
}
