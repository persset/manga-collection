import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Author } from "./Author";
import { Publisher } from "./Publisher";

@Entity("series")
class Series {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  publisher_id: string;

  @JoinColumn({ name: "publisher_id" })
  @ManyToOne(() => Publisher)
  publisherID: Publisher;

  @Column()
  author_id: string;

  @JoinColumn({ name: "author_id" })
  @ManyToOne(() => Author)
  authorID: Author;

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
