import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateIsBonusMalusDto } from './dto/create-is-bonus-malus.dto';
import { UpdateIsBonusMalusDto } from './dto/update-is-bonus-malus.dto';
import { IsBonusMalusService } from './is-bonus-malus.service';

@Controller('is-bonus-malus')
export class IsBonusMalusController {
  constructor(private readonly isBonusMalusService: IsBonusMalusService) {}

  @Post()
  create(@Body() createEventDto: CreateIsBonusMalusDto) {
    return this.isBonusMalusService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.isBonusMalusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.isBonusMalusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateIsBonusMalusDto,
  ) {
    return this.isBonusMalusService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.isBonusMalusService.remove(+id);
  }
}
