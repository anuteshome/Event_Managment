import { Controller,Body,Post } from '@nestjs/common';
import { signupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {

    @Post('signup')
    signup(@Body() body:signupDto){
        return body;
    }



}
