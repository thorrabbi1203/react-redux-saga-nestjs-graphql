import { IsString, IsArray, IsNumber } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  name!: string;

  @IsString()
  localized_name!: string;

  @IsString()
  primary_attr?: string;

  @IsString()
  attack_type?: string;

  @IsString()
  img: string;

  @IsString({ each: true })
  @IsArray()
  roles: string[];

  @IsNumber()
  base_health?: number;

  @IsNumber()
  base_health_regen?: number;

  @IsNumber()
  base_mana?: number;

  @IsNumber()
  base_mana_regen?: number;

  @IsNumber()
  base_armor?: number;

  @IsNumber()
  base_mr?: number;

  @IsNumber()
  base_attack_min?: number;

  @IsNumber()
  base_attack_max?: number;

  @IsNumber()
  base_str?: number;

  @IsNumber()
  base_agi?: number;

  @IsNumber()
  base_int?: number;

  @IsNumber()
  str_gain?: number;

  @IsNumber()
  agi_gain?: number;

  @IsNumber()
  int_gain?: number;

  @IsNumber()
  attack_range?: number;

  @IsNumber()
  projectile_speed?: number;

  @IsString()
  icon?: string;

  @IsNumber()
  attack_rate?: number;

  @IsNumber()
  move_speed?: number;

  @IsNumber()
  turn_rate?: number;

  @IsNumber()
  legs?: number;
}
