import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities';
import { AuthToken } from './entities';
import { AuthDto } from './dtos/auth.dtos';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthToken)
    private readonly authRepository: Repository<AuthToken>, //Must be declare in first line
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({ email });

    if (user && (await compare(pass, user.password))) {
      const { password, id, ...rest } = user;
      return { password, id, rest };
    }

    return null;
  }

  login(user: User) {
    const { id } = user;
    const payload = { sub: id };
    return {
      accessToken: this.jwtService.sign(payload),
      id: user.id,
      user,
    };
  }

  async checkLogged(id: number) {
    const user = await this.authRepository.findOne({
      userId: id,
    });

    return user;
  }

  async createAuth(dto: AuthDto) {
    const newAuth = this.authRepository.create(dto);
    const auth = await this.authRepository.save(newAuth);
    return auth;
  }
}
