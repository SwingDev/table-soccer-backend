import { IsInt, IsString, Max, Min } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ScoreDto {
  @ApiProperty({
    name: 'winner',
    description: 'FirebaseId of the loser',
  })
  @IsString()
  public readonly winner: string;

  @ApiProperty({
    name: 'loser',
    description: 'FirebaseId of the winner',
  })
  @IsString()
  public readonly loser: string;

  @IsInt()
  @Min(0)
  @Max(9)
  @ApiProperty({
    name: 'loserScore',
    description: 'The number of point that loser had. Int in range <0, 9>.'
  })
  public readonly loserScore: number;

  @IsInt()
  @ApiProperty({
    name: 'timestamp',
    description: 'Timestamp in seconds since epoch.'
  })
  @Min(0)
  public readonly timestamp: number;
}
