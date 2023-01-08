import { Module } from '@nestjs/common';
import { ParcelController } from './parcel.controller';
import { ParcelService } from './services/parcel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Parcel from './entities/parcel.entity';
import { UniqueSkuValidator } from './validators/unique-sku.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Parcel])],
  controllers: [ParcelController],
  providers: [ParcelService, UniqueSkuValidator],
})
export class ParcelModule {}
