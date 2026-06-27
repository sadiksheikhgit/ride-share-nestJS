import { Injectable } from '@nestjs/common';
import { RideEstimateDto } from './dto/ride-estimate.dto';

@Injectable()
export class RideService {
  public estimateRide(rideEstimateDto: RideEstimateDto): object {
    return {
      ...rideEstimateDto,
    };
  }
}
