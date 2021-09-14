import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Genre } from "./Genre";
import { Series } from "./Series";

@Entity("series_genres")
class SeriesGenres {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  series_id: string;

  @JoinColumn({ name: "series_id" })
  @ManyToOne(() => Series)
  seriesID: Series;

  @Column()
  genre_id: string;

  @JoinColumn({ name: "genre_id" })
  @ManyToOne(() => Genre)
  genreID: Genre;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SeriesGenres };
