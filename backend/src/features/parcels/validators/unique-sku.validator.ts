import { Injectable } from '@nestjs/common';

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ParcelService } from '../services/parcel.service';

@ValidatorConstraint({ name: 'sku', async: true })
@Injectable()
export class UniqueSkuValidator implements ValidatorConstraintInterface {
  constructor(private parcelService: ParcelService) {}

  async validate(value: string): Promise<boolean> {
    const parcel = await this.parcelService.getParcelBySku(value);
    return !parcel;
  }
  defaultMessage(): string {
    return 'sku must be unique';
  }
}
