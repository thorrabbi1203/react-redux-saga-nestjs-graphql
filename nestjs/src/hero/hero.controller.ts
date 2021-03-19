import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppResource } from 'src/app.roles';
import { HeroService } from './hero.service';
import { CreateHeroDto } from './dtos';
import { Auth } from 'src/common/decorators';
import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';

@ApiTags('Hero')
@Controller('hero')
export class HeroController {
  constructor(
    private readonly heroService: HeroService,
    @InjectRolesBuilder()
    private readonly roleBuilder: RolesBuilder, //Must be declared
  ) {}

  @Get()
  async getMany() {
    const data = await this.heroService.getMany();
    return { data };
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.heroService.getOne(id);
    return { data };
  }

  @Auth({
    resource: AppResource.HERO,
    action: 'create',
    possession: 'own',
  })
  @Post()
  async createHero(@Body() dto: CreateHeroDto) {
    const data = await this.heroService.createOne(dto);
    return { message: 'Hero created', data };
  }

  @Auth({
    resource: AppResource.HERO,
    action: 'delete',
    possession: 'own',
  })
  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.heroService.deleteOne(id);
    return { message: 'Hero deleted', data };
  }
}
