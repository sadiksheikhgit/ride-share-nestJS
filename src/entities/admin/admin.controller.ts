import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminService } from './admin.service';
import { AdminParams } from './admin-profile.params';
import { ProfilePictureValidationPipe } from '../common/pipes/profile-picture-validation.pipe';
import { UploadProfilePictureResponseDto } from '../common/dto/upload-profile-picture-response.dto';

@Controller('/v1/api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/create')
  public async createAdmin(
    @Body() createAdminDto: CreateAdminDto,
  ): Promise<object> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Put('/:id/profile-picture')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadProfilePicture(
    @Param('id') id: string,
    @UploadedFile(new ProfilePictureValidationPipe()) file: Express.Multer.File,
  ): Promise<UploadProfilePictureResponseDto> {
    return this.adminService.uploadProfilePicture(id, file);
  }

  @Get('/profile/:role')
  public adminProfileByRole(@Param() adminRole: AdminParams): object {
    return this.adminService.adminProfileByRole(adminRole);
  }
}
