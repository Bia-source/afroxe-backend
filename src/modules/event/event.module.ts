import { Module } from '@nestjs/common';
import { EventController } from './interfaces/event.controller';
import { EventService } from './service/event.service';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
