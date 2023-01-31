import { PartialType } from '@nestjs/mapped-types';
import { CreateResourceUsedDto } from './create-resource-used.dto';

export class UpdateResourceUsedDto extends PartialType(CreateResourceUsedDto) {}
