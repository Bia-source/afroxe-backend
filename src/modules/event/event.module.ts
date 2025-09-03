import { Module } from '@nestjs/common';
import { EventController } from './interfaces/event.controller';
import { EventService } from './service/event.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { GenericModule } from '@/shared/services/generic.module';

@Module({
  imports: [PrismaModule, GenericModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
