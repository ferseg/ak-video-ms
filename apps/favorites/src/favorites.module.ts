import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { Favorite } from './favorites/favorite.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'favorites.sqlite',
      entities: [Favorite],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Favorite]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
