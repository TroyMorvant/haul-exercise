import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('Testing AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('when calling processData()', () => {
    it('response should match snapshot"', () => {
      expect(appService.processData()).toMatchSnapshot();
    });
  });
});
