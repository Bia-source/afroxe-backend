import { Module } from '@nestjs/common';
import { AddressController } from './interfaces/address.controller';
import { AddressService } from './service/address.service';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
