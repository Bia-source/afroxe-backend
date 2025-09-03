import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './modules/event/event.module';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [EventModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
