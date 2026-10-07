import { Test, TestingModule } from '@nestjs/testing';
import { MyAdminController } from './my-admin.controller.js';
import { MyAdminService } from './my-admin.service.js';

describe('MyAdminController', () => {
  let myAdminController: MyAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyAdminController],
      providers: [MyAdminService],
    }).compile();

    myAdminController = app.get<MyAdminController>(MyAdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myAdminController.getHello()).toBe('Hello World!');
    });
  });
});
