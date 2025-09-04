// create-event.dto.ts
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { CreateEventScheduleDto } from './create-schedule.dto';

export class CreateEventDto {
  @IsUUID()
  addressId: string; // obrigatório

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateEventScheduleDto)
  schedule?: CreateEventScheduleDto;

  @IsOptional()
  @IsString()
  title?: string; // opcional

  @IsOptional()
  @IsString()
  description?: string; // opcional

  @IsOptional()
  @IsString()
  backgroundImg?: string; // opcional

  @IsOptional()
  @IsString()
  ticketUrl?: string;
}
