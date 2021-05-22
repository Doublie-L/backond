import { Module } from '@nestjs/common';
import { CreateSchemaController } from './create-schema.controller';
import { CreateSchemaService } from './create-schema.service';
import { DatabaseModule } from "../database/database.module";

@Module({
  imports:[DatabaseModule],
  controllers: [CreateSchemaController],
  providers: [CreateSchemaService]
})
export class CreateSchemaModule {}
