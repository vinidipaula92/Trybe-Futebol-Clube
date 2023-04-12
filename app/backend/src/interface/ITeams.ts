export interface ITeamsName {
  id?: number;
  teamName: string;
}

export interface ITeams {
  getTeams(): Promise<ITeamsName[]>;
  getTeamById(id: number): Promise<ITeamsName>;
  updateTeams(id: number, teamName: string): Promise<ITeamsName>;
}
