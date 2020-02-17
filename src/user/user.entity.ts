import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Score } from '../score/score.entity';

@Entity()
export class User {
  @PrimaryColumn()
  public readonly firebaseId: string;

  @Column({ type: 'text' })
  public readonly email: string;

  @Column({ type: 'text' })
  public readonly name: string;

  @Column({ type: 'text' })
  public readonly avatar: string;

  @OneToMany(() => Score, score => score.winner)
  private readonly matchesWon: Score[];

  @OneToMany(() => Score, score => score.loser)
  private readonly matchesLost: Score[];
}
