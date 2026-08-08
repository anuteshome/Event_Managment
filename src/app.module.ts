import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';


import MikroOrmConfig from './mikro-orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MikroOrmModule.forRoot(MikroOrmConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
