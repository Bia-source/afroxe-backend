import { IsString, IsOptional, IsDateString, IsArray, ArrayNotEmpty, isString } from 'class-validator';

export class CreateEventScheduleDto {
  @IsString()
  eventId: string

  @IsDateString()
  date: string; // data do evento em formato ISO

  @IsString()
  startTime: string; // horário de início (ex: "20:00")

  @IsString()
  endTime: string; // horário de término (ex: "02:00")

  @IsOptional()
  @IsString()
  happyHour?: string; // horário do happy hour (opcional, ex: "22:00")

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  eventHighlights: string[]; // informações chamativas do evento (ex: ["Até 23h 15 reais, depois 30"])
}
