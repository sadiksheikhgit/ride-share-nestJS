import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { SearchLocationParams } from './params/search-location.params';

@Controller('v1/api/location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('/search')
  public searchLocation(
    @Query() searchLocationParams: SearchLocationParams,
  ): object {
    return this.locationService.searchLocation(searchLocationParams);
  }
}
