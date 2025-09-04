import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { GenericModule } from '@/shared/services/generic.module';
import { PhotoController } from './interfaces/photo.controller';
import { PhotoService } from './service/photo.service';
import { GoogleDriveService } from '@/shared/services/googleDrive.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  imports: [PrismaModule, GenericModule],
  controllers: [PhotoController],
  providers: [PhotoService, PrismaService, GoogleDriveService]
})
export class PhotoModule {}
