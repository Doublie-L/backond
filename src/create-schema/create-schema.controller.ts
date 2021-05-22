import { Controller, Get } from "@nestjs/common";
import { CreateSchemaService } from "./create-schema.service";

@Controller("create-schema")
export class CreateSchemaController {
  constructor(private createSchemaService: CreateSchemaService) {
  }

  @Get()
  async getHello() {
    return this.createSchemaService.create();
  }
}
