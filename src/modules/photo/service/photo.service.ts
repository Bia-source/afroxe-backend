import { PrismaService } from '@/prisma/prisma.service';
import { GoogleDriveService } from '@/shared/services/googleDrive.service';
import { Injectable } from '@nestjs/common';
import { Photo, PhotoType } from '@prisma/client';

@Injectable()
export class PhotoService {
  constructor(
    private readonly prisma: PrismaService,
    private googleDrive: GoogleDriveService,
  ) {}

  private extractDriveId(driveUrl: string): string {
    const folderMatch = driveUrl.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if (folderMatch) return folderMatch[1];

    const fileMatch = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) return fileMatch[1];

    throw new Error('Não foi possível extrair o ID do link do Google Drive');
  }

  private getDirectDownloadLink(driveFileId: string) {
    return `https://drive.google.com/uc?export=download&id=${driveFileId}`;
  }

  async createPhoto(eventId: string, driveUrl: string) {
    const folderId = this.extractDriveId(driveUrl);
    const files = await this.googleDrive.listFilesInFolder(folderId);

    const photosData = files.map((file) => ({
      url: this.getDirectDownloadLink(file.id),
      type: PhotoType.GALLERY,
      eventId,
    }));

    await this.prisma.photo.createMany({
      data: photosData,
    });

    return "success"
  }

  async getAllPhotosByEvent(eventId: string){
    return this.prisma.photo.findMany({
        where: {
            eventId
        }
    })
  }
}
