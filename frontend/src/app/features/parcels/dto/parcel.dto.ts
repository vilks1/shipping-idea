export interface Parcel {
  id: number;
  sku: string;
  deliveryDate: Date;
  description: string
  shippingStreet: string;
  shippingTown: string;
  shippingCountry: string;
}