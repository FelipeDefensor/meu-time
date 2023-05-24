import { rest } from 'msw'
import { countries, countryToLeagueDetail } from './apiData'

const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3/'


export const handlers = [
  rest.get(BASE_URL + 'countries', (req, res, ctx) => {
    const rapidAPIKey = req.headers.get('X-RapidAPI-Key')

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
  
      if (!country || !countryToLeagueDetail[country]) {
        return res(
          ctx.status(200),
          ctx.json({response: []})
        )
      }
      
      return res(
        ctx.status(200),
        ctx.json({response: countryToLeagueDetail[country]})
      )
    })
]