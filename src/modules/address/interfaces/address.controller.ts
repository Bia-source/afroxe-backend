import { Body, Controller, Post, Get } from '@nestjs/common';
import { AddressService } from '../service/address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('address')
export class AddressController {
    constructor(private readonly service: AddressService){}
    
    @Post()
    create(@Body() address: CreateAddressDto){
        return this.service.createAddress({
            ...address
        });
    }   

    @Get()
    getAllAddress(){
        return this.service.findAll();
    }
}
