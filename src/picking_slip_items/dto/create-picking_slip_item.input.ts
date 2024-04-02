import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePickingSlipItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
