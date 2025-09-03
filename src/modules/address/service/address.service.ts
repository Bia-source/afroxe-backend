import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from '../interfaces/dto/create-address.dto';

@Injectable()
export class AddressService {
    constructor(private prisma: PrismaService){}

    async createAddress(address: CreateAddressDto){
        return this.prisma.address.create({
            data: address
        });
    }

    async findAll(){
        return this.prisma.address.findMany({
            include: { Event: true }
        });
    }

}
