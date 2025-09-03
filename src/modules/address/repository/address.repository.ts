import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { AddressEntity } from '../entity/address.entity';

@Injectable()
export class AddressRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: AddressEntity) {
    return this.prisma.address.create({ data });
  }

  async findAll() {
    return this.prisma.address.findMany({ include: {  Event: true } });
  }
}
