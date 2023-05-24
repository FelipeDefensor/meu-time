import { rest } from 'msw'
import { countries, countryToLeagueDetail, leagueToTeams, teamToPlayers, teamToStatistics } from './apiData'

const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3/'


export const handlers = [
  rest.get(BASE_URL + 'countries', (req, res, ctx) => {
    const rapidAPIKey = req.headers.get('X-RapidAPI-Key')

    debugger

    if (rapidAPIKey !== 'mockpasswd') {
      return res(
        ctx.status(403)
      )
    }

    return res(
      ctx.status(200),
      ctx.json({response: countries})
      )
    }),
    rest.get(BASE_URL + 'leagues', (req, res, ctx) => {
      const country = req.url.searchParams.get('country')
        
      if (!country || !countryToLeagueDetail[country as (keyof typeof countryToLeagueDetail)]) {
        return res(
          ctx.status(200),
          ctx.json({response: []})
        )
      }
      
      return res(
        ctx.status(200),
        ctx.json({response: countryToLeagueDetail[country as (keyof typeof countryToLeagueDetail)]})
      )
    }),
    rest.get(BASE_URL + 'teams', (req, res, ctx) => {
      const league = req.url.searchParams.get('league')

      if (!league)  {
        return res(
          ctx.status(200),
          ctx.json({response: []})
        )
      }

      try {
        return res(ctx.status(200), ctx.json({ response: leagueToTeams[parseInt(league) as (keyof typeof leagueToTeams)] }));
      } catch {
        return res(ctx.status(404), ctx.json({ message: 'Not Found' }));
      }
    }),
    rest.get(BASE_URL + 'teams/statistics', (req, res, ctx) => {
      const team = req.url.searchParams.get('team')

      if (!team)  {
        return res(
          ctx.status(200),
          ctx.json({response: []})
        )
      }

      try {
        return res(ctx.status(200), ctx.json({ response: teamToStatistics[parseInt(team) as (keyof typeof teamToStatistics)] }));
      } catch {
        return res(ctx.status(404), ctx.json({ message: 'Not Found' }));
      }
    }),
    rest.get(BASE_URL + 'players', (req, res, ctx) => {
      const team = req.url.searchParams.get('team')

      if (!team)  {
        return res(
          ctx.status(200),
          ctx.json({response: []})
        )
      }

      try {
        return res(ctx.status(200), ctx.json({ response: teamToPlayers[parseInt(team) as keyof typeof teamToPlayers], parameters: {team: parseInt(team!)} }));
      } catch {
        return res(ctx.status(404), ctx.json({ message: 'Not Found' }));
      }
    },
  )
]