import { IsString } from 'class-validator';

export class SearchLocationParams {
  @IsString()
  place: string;
}
