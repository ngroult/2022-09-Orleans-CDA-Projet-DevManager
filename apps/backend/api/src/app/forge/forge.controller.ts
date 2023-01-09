import { Controller, Post, Body } from '@nestjs/common';
import { ForgeService } from './forge.service';

@Controller('forge')
export class ForgeController {
  constructor(private readonly forgeService: ForgeService) {}

  @Post()
  create() {
    return this.forgeService.create();
  }
}
