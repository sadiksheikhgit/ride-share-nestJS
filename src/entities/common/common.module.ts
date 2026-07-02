import { Module } from '@nestjs/common';
import { StorageModule } from './storage/storage.module';
import { ProfilePictureService } from './profile-picture/profile-picture.service';

@Module({
  imports: [StorageModule],
  providers: [ProfilePictureService],
  exports: [ProfilePictureService],
})
export class CommonModule {}
