import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CharactersService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('characters')
export class CharactersController {
    constructor(private readonly roomsService: CharactersService) {}

    @Post()
    create(@Body() createRoomDto: CreateCharacterDto) {
        return this.roomsService.create(createRoomDto);
    }

    @Get()
    findAll(){
        return this.roomsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.roomsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRoomDto: UpdateCharacterDto) {
        return this.roomsService.update(+id, updateRoomDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.roomsService.remove(+id);
    }
}
