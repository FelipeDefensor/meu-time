type Country = {
  name: string;
  code: string;
  flag: string;
};

type League = {
  id: number;
  name: string;
  type: string;
  logo: string;
};

type Season = {
  year: number;
  start: string;
  end: string;
};

type LeagueDetail = {
  country: Country;
  league: League;
  seasons: Season[];
};

type TeamDetail = {
  team: Team;
  venue: object;
};

type Team = {
  code: string;
  country: string;
  founded: number;
  id: number;
  logo: string;
  name: string;
  national: boolean;
};

type Player = {
  age: number;
  id: number;
  name: string;
  number: number;
  photo: string;
  position: string;
};

type HomeAwayCount = {
  home: number;
  away: number;
  total: number;
};

type Fixtures = {
  played: HomeAwayCount;
  wins: HomeAwayCount;
  draws: HomeAwayCount;
  loses: HomeAwayCount;
};

type TotalAndPercentage = {
  total: number;
  percentage: number;
};

type CountByMinutes = {
  "0-15": TotalAndPercentage;
  "16-30": TotalAndPercentage;
  "31-45": TotalAndPercentage;
  "46-60": TotalAndPercentage;
  "61-75": TotalAndPercentage;
  "76-90": TotalAndPercentage;
  "91-105": TotalAndPercentage;
  "106-120": TotalAndPercentage;
};

type GoalsFor = {
  total: HomeAwayCount;
  average: HomeAwayCount;
  minute: CountByMinutes;
};

export type { Country, League, LeagueDetail, Team, TeamDetail, Player, Fixtures, GoalsFor };
