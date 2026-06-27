import { IsLatitude, IsLongitude, IsNotEmpty } from 'class-validator';

export class LocationDto {
  @IsNotEmpty()
  @IsLatitude()
  latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  longitude: number;

  @IsNotEmpty()
  address: string;
}
