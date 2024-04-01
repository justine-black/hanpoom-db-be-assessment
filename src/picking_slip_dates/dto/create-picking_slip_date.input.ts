import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePickingSlipDateInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
