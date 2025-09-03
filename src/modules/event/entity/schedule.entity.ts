export class ScheduleEntity {
  constructor(
    public id: string,
    public eventId: string,
    public date: Date,                  // data do evento
    public startTime: string,           // horário de início
    public endTime: string,             // horário de término
    public happyHour: string,          // horário de happy hour (opcional)
    public eventHighlights: string[],   // array de informações chamativas
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
