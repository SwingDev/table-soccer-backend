import { CRUDService } from 'src/common/crud.service';

import { Injectable } from '@nestjs/common';

import { Score } from '../score/score.entity';
import { Scoreboard } from './scoreboard.entity';
import { ScoreboardRepository } from './scoreboard.repository';

const qFactorScale = 400;
const averageScore = 1400;
const kLowScore = 30;
const kHighScore = 10;

@Injectable()
export class ScoreboardService extends CRUDService<Scoreboard> {
  constructor(
    repository: ScoreboardRepository
  ) {
    super(repository);
  }

  private qFactor(rating: number): number {
    return Math.pow(10, rating / qFactorScale);
  }

  private expectedScore(p1Rating: number, p2Rating: number): number {
    const p1QF: number = this.qFactor(p1Rating);
    const p2QF: number = this.qFactor(p2Rating);
    return p1QF / (p1QF + p2QF)
  }

  private kFactor(rating: number): number {
    if (rating > averageScore) {
      return kHighScore;
    }
    return kLowScore;
  }

  private gameScore(p1Goals: number, p2Goals: number): number {
    return p1Goals > p2Goals ? 1 : 0;
  }

  private newRating(currentRating: number, eScore: number, aScore: number): number {
    return currentRating + this.kFactor(currentRating) * (aScore - eScore);
  }

  public async takeNewScoreIntoAccount(score: Score): Promise<Scoreboard[]> {
    let winner: Scoreboard = await this.repository.findOne({user: score.winner});
    if (winner === void(0)) {
      winner = await this.repository.save(Object.assign(new Scoreboard(), {
        user: score.winner,
        score: averageScore,
      }));
    }

    let loser: Scoreboard = await this.repository.findOne({user: score.loser});
    if (loser === void(0)) {
      console.log('Create user LOSER');
      loser = await this.repository.save(Object.assign(new Scoreboard(), {
        user: score.loser,
        score: averageScore,
      }));
    }

    const wNewScore: number = this.newRating(
      winner.score,
      this.expectedScore(winner.score, loser.score),
      this.gameScore(10, score.loserScore)
    );

    const lNewScore: number = this.newRating(
      loser.score,
      this.expectedScore(loser.score, winner.score),
      this.gameScore(score.loserScore, 10)
    );

    const players: Scoreboard[] = await this.repository.find();
    const newTotalScore: number = players.length * averageScore
      - winner.score - loser.score
      + wNewScore + lNewScore;

    const scoreScaler: number = newTotalScore / players.length / averageScore;

    return this.repository.save(players.map(player => {
      if (player.user.firebaseId === score.winner.firebaseId) {
        player.score = wNewScore * scoreScaler;
      } else if (player.user.firebaseId === score.loser.firebaseId) {
        player.score = lNewScore * scoreScaler;
      }
      player.score = player.score * scoreScaler;
      return player;
    }));
  }
}
