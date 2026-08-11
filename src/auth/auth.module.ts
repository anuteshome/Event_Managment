import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    MikroOrmModule.forFeature([User]),
    JwtModule.register({
      secret:'this-is-some-sceret-key-for-jwt-token',
      signOptions:{
      expiresIn:"1h",
      }
    })
  
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
