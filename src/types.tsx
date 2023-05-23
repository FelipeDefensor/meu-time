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

export type { Country, League, LeagueDetail, Team, TeamDetail };
