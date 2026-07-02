import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminParams } from './admin-profile.params';
import { ProfilePictureService } from '../common/profile-picture/profile-picture.service';
import { UploadProfilePictureResponseDto } from '../common/dto/upload-profile-picture-response.dto';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly profilePictureService: ProfilePictureService,
  ) {}

  public async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
    const hashedPass = await bcrypt.hash(createAdminDto.password, 12);

    const admin = this.adminRepository.create({
      ...createAdminDto,
      password: hashedPass,
    });
    return this.adminRepository.save(admin);
  } //follow repo pattern to avoid error

  public adminProfileByRole(adminRole: AdminParams): object {
    return { role: adminRole };
  }

  public async uploadProfilePicture(
    id: string,
    file: Express.Multer.File,
  ): Promise<UploadProfilePictureResponseDto> {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) throw new NotFoundException(`Admin with id '${id}' not found.`);

    const profilePictureUrl = await this.profilePictureService.replace(
      null,
      file,
      'admins',
    );

    await this.adminRepository.update(id, { profilePictureUrl });

    return { profilePictureUrl };
  }
}
