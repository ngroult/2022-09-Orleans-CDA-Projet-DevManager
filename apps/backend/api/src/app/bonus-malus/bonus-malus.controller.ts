import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBonusMalusDto } from './dto/create-bonus-malus.dto';
import { UpdateBonusMalusDto } from './dto/update-bonus-malus.dto';
import { BonusMalusService } from './bonus-malus.service';

@Controller('bonus-malus')
export class BonusMalusController {
  constructor(private readonly bonusMalusService: BonusMalusService) {}

  @Post()
  create(@Body() createEventDto: CreateBonusMalusDto) {
    return this.bonusMalusService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.bonusMalusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonusMalusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateBonusMalusDto) {
    return this.bonusMalusService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonusMalusService.remove(+id);
  }
}
