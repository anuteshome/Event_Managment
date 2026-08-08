import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';


import MikroOrmConfig from './mikro-orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(MikroOrmConfig),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
