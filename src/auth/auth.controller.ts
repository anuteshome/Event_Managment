import { Controller, Body, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import {LoginDto} from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService:AuthService){}

  @Post('signup')
  signup(@Body() body: SignupDto) {
    return this.authService.signup(body);

  }

  @Post('login')
  login (@Body() body :LoginDto){

  }

}

