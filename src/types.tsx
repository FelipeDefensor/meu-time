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

export type { Country, League, LeagueDetail };
