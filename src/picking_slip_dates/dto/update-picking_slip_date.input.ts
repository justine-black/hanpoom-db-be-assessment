import { CreatePickingSlipDateInput } from './create-picking_slip_date.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePickingSlipDateInput extends PartialType(CreatePickingSlipDateInput) {
  @Field(() => Int)
  id: number;
}
