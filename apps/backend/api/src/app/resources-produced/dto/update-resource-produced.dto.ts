import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceProducedDto } from './create-resource-produced.dto';

export class UpdateResourceProducedDto extends PartialType(
  CreateResourceProducedDto,
) {}
