import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RiderStatus } from './enums/rider-status.enum';

@Entity()
export class Rider {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    // hashing will be done in service class
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  phone: string;

  @Column({
    type: 'enum',
    enum: RiderStatus,
    default: RiderStatus.PENDING_VERIFICATION,
    nullable: false,
  })
  status: RiderStatus;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  profilePictureUrl: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
