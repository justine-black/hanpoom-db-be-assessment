import { CreatePickingSlipInput } from './create-picking_slip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePickingSlipInput extends PartialType(CreatePickingSlipInput) {
  @Field(() => Int)
  id: number;
}
