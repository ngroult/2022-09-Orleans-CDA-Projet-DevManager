import { Controller, Post, Body } from '@nestjs/common';
import { ForgeProdService } from './forge-prod.service';

@Controller('forge/prod')
export class ForgeProdController {
  constructor(private readonly forgeProdService: ForgeProdService) {}

  @Post()
  create() {
    return this.forgeProdService.create();
  }
}
