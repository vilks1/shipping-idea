import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { ParcelService } from './services/parcel.service';

@Controller('parcels')
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Post()
  create(@Body() parcel: CreateParcelDto) {
    return this.parcelService.createParcel(parcel);
  }

  @Get()
  index(
    @Query('description') description,
    @Query('country') country,
  ) {
    return this.parcelService.getParcels(description, country);
  }
}
