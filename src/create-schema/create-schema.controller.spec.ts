import { Test, TestingModule } from '@nestjs/testing';
import { CreateSchemaController } from './create-schema.controller';

describe('CreateSchemaController', () => {
  let controller: CreateSchemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateSchemaController],
    }).compile();

    controller = module.get<CreateSchemaController>(CreateSchemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
