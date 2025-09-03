import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../interfaces/dto/create-event.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateEventScheduleDto } from '../interfaces/dto/create-schedule.dto';
import { GenericService } from '@/shared/services/generic.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService, private readonly genericService: GenericService) {}

  async createEvent(eventDto: CreateEventDto) {
   const { schedule, ...event } = eventDto;

    return this.prisma.event.create({
    data: {
      ...event,
      schedule: schedule
        ? {
            create: {
              date: new Date(schedule.date),
              startTime: schedule.startTime,
              endTime: schedule.endTime,
              happyHour: schedule.happyHour,
              eventHighlights: schedule.eventHighlights,
            },
          }
        : undefined, 
    },
    include: { address: true, schedule: true },
  });
  }

  async createSchedule(schedule: CreateEventScheduleDto){
    await this.genericService.findRecordById('event', schedule.eventId);
   
    return this.prisma.eventSchedule.create({
      data: {
        ...schedule,
        date: new Date(schedule.date)
      },
      include: { event: true}
    })
  }

  async getAllEvents(){
    return this.prisma.event.findMany({
      include: {
        schedule: {
          select: {
            date: true,
            startTime: true,
            endTime: true,
            eventHighlights: true
          }
        },
        address: {
          select: {
             street: true,
             city: true,
             neighborhood: true,
             number: true
          }
        }
      }
    });
  }
}
