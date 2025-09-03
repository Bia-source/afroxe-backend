import { Injectable } from '@nestjs/common';
import { EventEntity } from '../entity/event.entity';
import { PrismaService } from '@/prisma/prisma.service';
import { ScheduleEntity } from '../entity/schedule.entity';

@Injectable()
export class EventRepository {
  constructor(private prisma: PrismaService) {}

  // async create(data: EventEntity) {
  //   return this.prisma.event.create({ data });
  // }

  async findAll() {
    return this.prisma.event.findMany({ include: { Photo: true, address: true } });
  }

  async createSchedule(data: ScheduleEntity){
    return this.prisma.eventSchedule.create({ data });
  }
}
