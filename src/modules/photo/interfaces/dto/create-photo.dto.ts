// create-event.dto.ts
import { IsString, IsOptional } from 'class-validator';
import { PhotoType } from '@prisma/client';

export class CreatePhotoDto {
  @IsString()
  url: string; 

  @IsString()
  eventId: string; 

  @IsString()
  type: PhotoType; 
}
