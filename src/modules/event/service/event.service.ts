import { Injectable } from '@nestjs/common';
import { CreateEventDto } from '../interfaces/dto/create-event.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateEventScheduleDto } from '../interfaces/dto/create-schedule.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

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
        : undefined, // caso não tenha schedule
    },
    include: { address: true, schedule: true },
  });
  }

  async createSchedule(schedule: CreateEventScheduleDto){
    return this.prisma.eventSchedule.create({
      data: {
        ...schedule,
        date: new Date(schedule.date)
      },
      include: { event: true}
    })
  }

  // async findAll() {
  //   return this.prisma.event.findMany({
  //     include: { Photo: true, address: true },
  //   });
  // }

  // async findOne(id: string) {
  //   return this.prisma.event.findUnique({
  //     where: { id },
  //     include: { Photo: true, address: true },
  //   });
  // }
}
