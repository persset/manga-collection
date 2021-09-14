import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("series")
class Series {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  publisher: string;

  @Column()
  author: string;

  @Column()
  country_of_origin: string;

  @Column()
  current_volumes: number;

  @Column()
  current_origin_volumes: number;

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

export { Series };
