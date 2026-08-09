import { Injectable,ConflictException } from "@nestjs/common";
import {EntityRepository,EntityManager} from "@mikro-orm/core";
import {InjectRepository} from "@mikro-orm/nestjs";
import bcrypt from "bcryptjs";

import {User} from "../user/user.entity";
import {SignupDto} from"./dto/signup.dto";


@Injectable()
export class AuthService{
  
  constructor(
@InjectRepository(User)
private readonly userRepository:EntityRepository<User>,
private readonly em:EntityManager
  ){}

  async signup (dto:SignupDto){
    const existingUser= await this.userRepository.findOne({
      email:dto.email
    });
      
     if(existingUser){
      throw new ConflictException("Email Already Used");
     }
     
     const hashedPassword:string = await bcrypt.hash(dto.password,10);
     
    const user = this.userRepository.create({
      email:dto.email,
      password:hashedPassword,
      firstName:dto.firstName,
      lastName:dto.lastName,
    createdAt:new Date()
    });

    


  }

}