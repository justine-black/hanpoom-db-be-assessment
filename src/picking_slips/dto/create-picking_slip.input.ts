import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePickingSlipInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  orderId: number;

  @Field(() => Int)
  orderFulfillmentOrderId: number;

  @Field(() => Int)
  isContainedSingleProduct: number;

  @Field(() => String)
  createdAt: Date;
}
