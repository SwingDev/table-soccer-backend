import { IsEmail, IsNumber, IsPositive, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ScoreboardDto {
  @ApiProperty({
    name: 'firebaseId',
    description: 'User firebase id.',
  })
  @IsString()
  public readonly firebaseId: string;

  @ApiProperty({
    name: 'email',
    description: 'User email.',
  })
  @IsEmail()
  public readonly email: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    name: 'score',
    description: 'User score',
  })
  public readonly score: number;

  @ApiProperty({
    name: 'name',
    description: 'User real name.'
  })
  @IsString()
  public readonly name: string;

  @ApiProperty({
    name: 'avatar',
    description: 'User avatar URL.',
  })
  public readonly avatar: string;
}
