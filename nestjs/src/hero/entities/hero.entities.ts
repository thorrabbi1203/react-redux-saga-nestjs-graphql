import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('hero')
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255 })
  localized_name!: string;

  @Column({ type: 'varchar', length: 255 })
  primary_attr?: string;

  @Column({ type: 'varchar', length: 255 })
  attack_type?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  img: string;

  @Column({ type: 'simple-array' })
  roles: string[];

  @Column({ type: 'int' })
  base_health?: number;

  @Column({ type: 'int' })
  base_health_regen?: number;

  @Column({ type: 'int' })
  base_mana?: number;

  @Column({ type: 'int' })
  base_mana_regen?: number;

  @Column({ type: 'int' })
  base_armor?: number;

  @Column({ type: 'int' })
  base_mr?: number;

  @Column({ type: 'int' })
  base_attack_min?: number;

  @Column({ type: 'int' })
  base_attack_max?: number;

  @Column({ type: 'int' })
  base_str?: number;

  @Column({ type: 'int' })
  base_agi?: number;

  @Column({ type: 'int' })
  base_int?: number;

  @Column({ type: 'int' })
  str_gain?: number;

  @Column({ type: 'int' })
  agi_gain?: number;

  @Column({ type: 'int' })
  int_gain?: number;

  @Column({ type: 'int' })
  attack_range?: number;

  @Column({ type: 'int' })
  projectile_speed?: number;

  @Column({ type: 'int' })
  attack_rate?: number;

  @Column({ type: 'int' })
  move_speed?: number;

  @Column({ type: 'int' })
  turn_rate?: number;

  @Column({ type: 'bool', default: true })
  cm_enabled?: boolean;

  @Column({ type: 'int' })
  legs?: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
