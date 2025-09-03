import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from '../service/event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { CreateEventScheduleDto } from './dto/create-schedule.dto';

@Controller('events')
export class EventController {
  constructor(private readonly service: EventService) {}

  @Post()
  create(@Body() event: CreateEventDto) {
    return this.service.createEvent({
      ...event,
    });
  }

 @Post('schedule')
  createSchedule(@Body() schedule: CreateEventScheduleDto) {
    return this.service.createSchedule({
      ...schedule
    });
  }
  
}
