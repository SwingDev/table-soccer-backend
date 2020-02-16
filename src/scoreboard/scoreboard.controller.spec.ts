import { Test, TestingModule } from '@nestjs/testing';
import { ScoreboardController } from './scoreboard.controller';

describe('Scoreboard Controller', () => {
  let controller: ScoreboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoreboardController],
    }).compile();

    controller = module.get<ScoreboardController>(ScoreboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
