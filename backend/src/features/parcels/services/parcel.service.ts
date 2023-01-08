import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Parcel from '../entities/parcel.entity';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { CreateParcelDto } from '../dto/create-parcel.dto';
import { Countries } from '../../countries/enums/country.enum';

@Injectable()
export class ParcelService {
  constructor(
    @InjectRepository(Parcel) private parcelRepository: Repository<Parcel>,
  ) {}

  async getParcelBySku(sku: string): Promise<Parcel | null> {
    return this.parcelRepository.findOne({ where: { sku } });
  }

  async getParcels(
    description?: string,
    country?: Countries,
  ): Promise<Parcel[]> {
    const criteria: FindManyOptions<Parcel> = {
      order: {
          deliveryDate: 'desc',
      },
    };

    if (country) {
      criteria.where = { ...criteria.where, shippingCountry: country };
    }

    if (description) {
      criteria.where = {
        ...criteria.where,
        description: Like(`%${description}%`),
      };
    }

    return this.parcelRepository.find(criteria);
  }

  async createParcel(parcel: CreateParcelDto): Promise<Parcel> {
    const newParcel = await this.parcelRepository.create(parcel);
    await this.parcelRepository.save(newParcel);

    return newParcel;
  }
}
