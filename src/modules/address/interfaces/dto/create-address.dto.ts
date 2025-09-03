// create-address.dto.ts
import { IsString, IsOptional, IsInt, Min } from 'class-validator';

export class CreateAddressDto {
  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  neighborhood?: string;

  @IsInt()
  number: number;

  @IsString()
  CEP: string; // obrigatório
}
