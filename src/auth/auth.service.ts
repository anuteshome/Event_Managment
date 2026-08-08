import { Injectable, ConflictException} from '@nestjs/common';
import {InjectRepository} from "@mikro-orm/nestjs";
import {User} from "../user/user.entity";
import {EntityManager} from "@mikro-orm/postgresql";


@Injectable()
export class AuthService {

}


// import { ConflictException, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@mikro-orm/nestjs';
// import { EntityRepository } from '@mikro-orm/postgresql';
// import * as bcrypt from 'bcryptjs';

// import { User } from '../user/user.entity';
// import { SignupDto } from './dto/signup.dto';

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: EntityRepository<User>,
//   ) {}

//   async signup(dto: SignupDto) {
//     const existingUser = await this.userRepository.findOne({
//       email: dto.email,
//     });

//     if (existingUser) {
//       throw new ConflictException('Email already exists');
//     }

//     const hashedPassword = await bcrypt.hash(dto.password, 10);

//     const user = this.userRepository.create({
//       email: dto.email,
//       password: hashedPassword,
//       firstName: dto.firstName,
//       lastName: dto.lastName,
//       createdAt: new Date(),
//     });

//     await this.userRepository.getEntityManager().persistAndFlush(user);

//     return {
//       id: user.id,
//       email: user.email,
//       firstName: user.firstName,
//       lastName: user.lastName,
//     };
//   }
// }