import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn({ type: 'int' })
  public readonly id: number;

  @ManyToOne(() => User, user => user.firebaseId, { eager: true })
  public readonly winner: User;

  @ManyToOne(() => User, user => user.firebaseId, { eager: true })
  public readonly loser: User;

  @Column({ type: 'int' })
  public readonly loserScore: number;

  @Column({ type: 'int' })
  public readonly timestamp: number;
}
