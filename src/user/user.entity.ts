import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
