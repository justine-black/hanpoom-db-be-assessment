import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PickingSlipsService } from './picking_slips.service';
import { PickingSlip } from './entities/picking_slip.entity';
import { CreatePickingSlipInput } from './dto/create-picking_slip.input';
import { UpdatePickingSlipInput } from './dto/update-picking_slip.input';
import { PickingSlipStatus } from 'src/enums/picking_slip_status.enum';

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
  findAll(
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
    @Args('status', { type: () => PickingSlipStatus, nullable: true })
    status?: PickingSlipStatus,
    @Args('has_pre_order_item', { type: () => Boolean, nullable: true })
    has_pre_order_item?: Boolean,
  ) {
    return this.pickingSlipsService.findAll(limit, status, has_pre_order_item);
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

  @ResolveField(() => PickingSlip)
  async status(@Parent() pickingSlip: PickingSlip): Promise<string> {
    return this.pickingSlipsService.calculateStatus(
      pickingSlip.pickingSlipDate,
    );
  }

  @ResolveField(() => PickingSlip)
  async hasPreOrderItem(@Parent() pickingSlip: PickingSlip): Promise<Boolean> {
    return this.pickingSlipsService.hasPreOrderItem(
      pickingSlip.pickingSlipItems,
    );
  }
}
