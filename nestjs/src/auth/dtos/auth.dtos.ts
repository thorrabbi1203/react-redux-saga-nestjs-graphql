import { MaxLength } from 'class-validator';

export class AuthDto {
  userId: number;
  @MaxLength(255)
  accessToken: string;
  status: boolean;
}
