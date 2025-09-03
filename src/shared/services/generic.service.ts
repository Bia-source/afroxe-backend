import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class GenericService {
  constructor(private prisma: PrismaService) {}

  async findRecordById(tableName: string, id: string) {
    const model = (this.prisma as any)[tableName];

    if (!model) {
      throw new Error(`Tabela ${tableName} não existe`);
    }

    const record = await model.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Not found ${tableName}`);
    }

    return record;
  }

  
}
