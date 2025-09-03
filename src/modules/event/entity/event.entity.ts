import { ScheduleEntity } from "./schedule.entity";

export class EventEntity {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
    public photo: any[],
    public schedule: ScheduleEntity | null,
    public backgroundImg: string,
    public addressId: string,
    public ticketUrl: string
  ) {}
}
