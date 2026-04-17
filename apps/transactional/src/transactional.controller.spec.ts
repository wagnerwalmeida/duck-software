import { Test, TestingModule } from '@nestjs/testing';
import { TransactionalController } from './transactional.controller';
import { TransactionalService } from './transactional.service';

describe('TransactionalController', () => {
  let transactionalController: TransactionalController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TransactionalController],
      providers: [TransactionalService],
    }).compile();

    transactionalController = app.get<TransactionalController>(TransactionalController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(transactionalController.getHello()).toBe('Hello World!');
    });
  });
});
