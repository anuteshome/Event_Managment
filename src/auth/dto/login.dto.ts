import { IsEmail,IsString,MinLength, } from "class-validator";

class LoginDto{
     
    @IsString()
    @IsEmail()
    email:string

    @IsString()
    @MinLength(6)
    password:string

}