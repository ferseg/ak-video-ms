import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FavoriteDto } from './dtos/favorite.dto';
import { FavoritesService } from './favorites.service';
import { Favorite } from './favorites/favorite.entity';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getFavorites(
    @Query('userId') userId: string,
    @Query('movieName') movieName: string,
  ): Promise<Favorite[]> {
    return this.favoritesService.getFavorites();
  }

  @Post()
  createFavorite(@Body() favorite: FavoriteDto): Promise<Favorite> {

  }
}
