import { CreatePickingSlipItemInput } from './create-picking_slip_item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePickingSlipItemInput extends PartialType(CreatePickingSlipItemInput) {
  @Field(() => Int)
  id: number;
}
