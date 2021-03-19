import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
} from 'typeorm';
import { User } from '../../user/entities';

@Entity('authtoken')
export class AuthToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  userId: number;

  @Column({ name: 'access_token', type: 'varchar', length: 255 })
  accessToken: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @OneToOne(
    () => User,
    user => user.auth,
  )
  user: User;
}
