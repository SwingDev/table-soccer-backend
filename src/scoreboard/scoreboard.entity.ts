import { User } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scoreboard {
  @PrimaryGeneratedColumn({ type: 'int' })
  public readonly id: number;

  @JoinColumn()
  @OneToOne(() => User, user => user.firebaseId, { eager: true })
  public readonly user: User;

  @Column({ type: 'float' })
  public score: number;
}
