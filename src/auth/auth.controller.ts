import { Controller, Body, Post } from '@nestjs/common';
import { signupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  // constructor({private readonly a})

  @Post('signup')
  signup(@Body() body: signupDto) {
    return body;
  }
}
