import { IsInt, IsString, Max, Min } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ScoreDto {
  @ApiProperty({
    name: 'Winner',
    description: 'FirebaseId of the loser',
  })
  @IsString()
  public readonly winner: string;

  @ApiProperty({
    name: 'Loser',
    description: 'FirebaseId of the winner',
  })
  @IsString()
  public readonly loser: string;

  @IsInt()
  @Min(0)
  @Max(9)
  public readonly loserScore: number;

  @IsInt()
  @ApiProperty({
    name: 'Timestamp',
    description: 'Timestamp in miliseconds since epoch.'
  })
  @Min(0)
  public readonly timestamp: number;
}
