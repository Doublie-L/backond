import { Test, TestingModule } from '@nestjs/testing';
import { CreateSchemaService } from './create-schema.service';

describe('CreateSchemaService', () => {
  let service: CreateSchemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateSchemaService],
    }).compile();

    service = module.get<CreateSchemaService>(CreateSchemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
