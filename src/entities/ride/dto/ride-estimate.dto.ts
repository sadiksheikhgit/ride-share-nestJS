import { LocationDto } from 'src/entities/location/dto/location.dto';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class RideEstimateDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LocationDto)
  pickup: LocationDto;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => LocationDto)
  destination: LocationDto;

  @IsOptional()
  vehicleType: string; //later enum from vehicle class
}
