import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Hero } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHeroDto } from './dtos';

@Injectable()
export class HeroService {
  constructor(
    @InjectRepository(Hero)
    private readonly heroRepository: Repository<Hero>,
  ) {}

  async getMany() {
    return await this.heroRepository.find();
  }

  async getOne(id: number) {
    const hero = await this.heroRepository.findOne(id);

    return hero;
  }

  async createOne(dto: CreateHeroDto) {
    const newHero = this.heroRepository.create(dto);
    const hero = await this.heroRepository.save(newHero);

    return hero;
  }

  async deleteOne(id: number) {
    const user = await this.getOne(id);
    return await this.heroRepository.remove(user);
  }
}
