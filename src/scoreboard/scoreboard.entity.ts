import { User } from 'src/user/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scoreboard {
  @PrimaryGeneratedColumn({ type: 'int' })
  public readonly id: number;

  @OneToOne(() => User, user => user.firebaseId)
  public readonly user: User;

  @Column({ type: 'float' })
  public score: number;

  @Column({type: 'text'})
  public readonly email: string;

  @Column({type: 'text'})
  public readonly avatar: string;
}
