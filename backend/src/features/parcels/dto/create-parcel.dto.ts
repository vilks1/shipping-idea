import { Countries } from '../../countries/enums/country.enum';
import { IsDateString, IsEnum, IsString, Validate } from 'class-validator';
import { UniqueSkuValidator } from '../validators/unique-sku.validator';

export class CreateParcelDto {
  @IsString()
  @Validate(UniqueSkuValidator)
  sku: string;
  @IsString()
  description: string;
  @IsDateString()
  deliveryDate: Date;
  @IsString()
  shippingStreet: string;
  @IsString()
  shippingTown: string;
  @IsEnum(Countries)
  shippingCountry: Countries;
}
