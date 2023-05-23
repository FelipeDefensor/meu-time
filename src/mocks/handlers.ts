import { rest } from 'msw'

const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3/'

export const handlers = [
  rest.get(BASE_URL + 'countries', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        response: [
              { name: 'Country1' },
              { name: 'Country2' },
              { name: 'Country3' },
            ]        
        })
      )
    })
]