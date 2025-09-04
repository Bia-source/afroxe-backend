import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { PhotoService } from '../service/photo.service';

@Controller('photos')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Post('import/:eventId')
  async import(@Param('eventId') eventId: string, @Body('driveUrl') driveUrl: string) {
    console.log(driveUrl);
    const result = await this.photoService.createPhoto(eventId, driveUrl)
    return { response: result};
  }

  @Get('event/:eventId')
  async getAllPhotos(@Param('eventId') eventId: string){
    return this.photoService.getAllPhotosByEvent(eventId)
  }

}
