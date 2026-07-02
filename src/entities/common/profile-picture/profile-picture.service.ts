import { Inject, Injectable } from '@nestjs/common';
import type { IStorageService } from '../storage/storage.interface';
import { STORAGE_SERVICE } from '../storage/storage.module';

@Injectable()
export class ProfilePictureService {
  constructor(
    @Inject(STORAGE_SERVICE)
    private readonly storageService: IStorageService,
  ) {}

  async replace(
    currentUrl: string | null,
    file: Express.Multer.File,
    folder: string,
  ): Promise<string> {
    if (currentUrl) {
      await this.storageService.delete(currentUrl);
    }
    return this.storageService.upload(file, folder);
  }
}
