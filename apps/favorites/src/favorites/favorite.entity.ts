import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  movieName: string;

  @Column()
  userId: string;

  @Column()
  detail: string;
}
