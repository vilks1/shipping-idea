import { ParcelModule } from './parcels/parcel.module';
import { CountryModule } from './countries/country.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ParcelModule, CountryModule],
  controllers: [],
  providers: [],
})
export class FeatureModule {}
