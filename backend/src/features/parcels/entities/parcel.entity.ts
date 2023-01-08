import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import BaseEntity from '../../../core/entities/base.entity';
import { Countries } from '../../countries/enums/country.enum';

@Entity({
  name: 'parcels',
})
class Parcel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  sku: string;

  @Column()
  description: string;

  @Column({ name: 'delivery_date', type: 'date' })
  deliveryDate: Date;

  @Column({ name: 'shipping_street' })
  shippingStreet: string;

  @Column({ name: 'shipping_town' })
  shippingTown: string;

  @Column({ name: 'shipping_country', enum: Countries, type: 'enum' })
  shippingCountry: Countries;
}

export default Parcel;
