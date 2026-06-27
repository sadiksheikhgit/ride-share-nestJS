import { Injectable } from '@nestjs/common';
import { SearchLocationParams } from './params/search-location.params';

@Injectable()
export class LocationService {
  public searchLocation(searchLocationParams: SearchLocationParams): object {
    return { place: searchLocationParams.place };
  }
}
