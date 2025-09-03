import { Module } from '@nestjs/common';
import { GenericService } from './generic.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [GenericService, PrismaService],
  exports: [GenericService],
})
export class GenericModule {}
