import { Controller, Get } from '@nestjs/common';
import { Countries } from './enums/country.enum';

@Controller('countries')
export class CountryController {
  @Get()
  get(): {key: keyof typeof Countries, value: Countries}[] {
      return (Object.keys(Countries) as (keyof typeof Countries)[]).map(
          (key) => {
            return {
                default: Countries.ESTONIA === Countries[key],
                key,
                value: Countries[key]
            }
          },
      );
  }
}
