import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';

@Module({
  imports: [],
  controllers: [CountryController],
  providers: [],
})
export class CountryModule {}
