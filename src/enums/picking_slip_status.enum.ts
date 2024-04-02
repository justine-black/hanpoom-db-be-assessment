import { registerEnumType } from '@nestjs/graphql';

export enum PickingSlipStatus {
  NOT_PRINTED = 'not_printed',
  PRINTED = 'printed',
  HELD = 'held',
}

registerEnumType(PickingSlipStatus, {
  name: 'PickingSlipStatus',
});
