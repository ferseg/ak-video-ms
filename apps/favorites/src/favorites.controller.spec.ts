import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';

describe('FavoritesController', () => {
  let favoritesController: FavoritesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesController],
      providers: [FavoritesService],
    }).compile();

    favoritesController = app.get<FavoritesController>(FavoritesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(favoritesController.getHello()).toBe('Hello World!');
    });
  });
});
