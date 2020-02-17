import { User } from 'src/user/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn({ type: 'int' })
  public readonly id: number;

  @OneToOne(() => User, user => user.firebaseId)
  public readonly winner: User;

  @OneToOne(() => User, user => user.firebaseId)
  public readonly loser: User;

  @Column({ type: 'int' })
  public readonly loserScore: number;

  @Column({ type: 'int' })
  public readonly timestamp: number;
}
