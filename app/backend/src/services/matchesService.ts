import { StatusCodes } from 'http-status-codes';
import Matches from '../database/models/matches.model';
import Teams from '../database/models/teams.model';
import User from '../database/models/user.model';
import { IMatches, IMatchesGet, INewMatch } from '../interface/IMatches';
import UnauthorizedeError from '../validations/UnhathorizedError';
import ValidationError from '../validations/ValidationError';
import JwtService from './JwtService';

export default class MatchesService implements IMatchesGet {
  private db = Matches;
  private dbUser = User;
  private homeTeam = {
    model: Teams,
    as: 'teamHome',
    attributes: ['teamName'],
  };

  private awayTeam = {
    model: Teams,
    as: 'teamAway',
    attributes: ['teamName'],
  };

  async getMatches(inProgressMatch: boolean): Promise<IMatches[]> {
    if (inProgressMatch) {
      const matches = await this.db.findAll({
        include: [this.homeTeam, this.awayTeam],
        where: { inProgress: true },
      });
      return matches as IMatches[];
    }
    const matches = await this.db.findAll({
      include: [this.homeTeam, this.awayTeam],
    });
    return matches as IMatches[];
  }

  async getSaveMatch(token: string, data: INewMatch): Promise<INewMatch> {
    const { payload } = JwtService.verify(token);
    const user = await this.dbUser.findOne({ where: { email: payload.email } });
    if (!user) {
      throw new UnauthorizedeError(StatusCodes.NOT_FOUND, 'Usuário não encontrado');
    }
    if (data.homeTeam === data.awayTeam) {
      throw new ValidationError(401, 'It is not possible to create a match with two equal teams');
    }
    if (data.homeTeam === undefined || data.awayTeam === undefined) {
      throw new ValidationError(404, 'There is no team with such id!');
    }
    const match = await this.db.create({ ...data, inProgress: true });
    return match;
  }

  async finishMatch(id: number): Promise<Matches> {
    const match = await this.db.findByPk(id);
    if (!match) {
      throw new ValidationError(401, 'Partida não encontrada');
    }
    return match;
  }
}
