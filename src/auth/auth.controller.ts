import { Controller, Body, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  // constructor({private readonly a})

  @Post('signup')
  signup(@Body() body: SignupDto): SignupDto {
    return body;
  }
}
