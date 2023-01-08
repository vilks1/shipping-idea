import { Test, TestingModule } from '@nestjs/testing';
import { CountryController } from './country.controller';

describe('CountryController', () => {
  let countryController: CountryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
    }).compile();

    countryController = app.get<CountryController>(CountryController);
  });

  describe('root', () => {
    it('should return list of countries', () => {
      expect(countryController.get()).toStrictEqual([
          {
              key: 'ESTONIA',
              value: "Estonia",
              default: true,
          },
          {
              key: 'FINLAND',
              value: "Finland",
              default: false,
          }
      ]);
    });
  });
});
