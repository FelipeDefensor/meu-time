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
  nationality: string;
  firstname: string;
  lastname: string;
  height: number;
  weight: number;
  injured: boolean;
  birth: object;
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

type Minutes = "0-15" | "16-30" | "31-45" | "46-60" | "61-75" | "76-90" | "91-105" | "106-120";

type CountByMinutes = Record<Minutes, TotalAndPercentage>;

type GoalsFor = {
  total: HomeAwayCount;
  average: HomeAwayCount;
  minute: CountByMinutes;
};

type Formation = {
  formation: string;
  played: number;
};

export type {
  Country,
  League,
  LeagueDetail,
  Team,
  TeamDetail,
  Player,
  Fixtures,
  GoalsFor,
  CountByMinutes,
  Minutes,
  Formation,
};
