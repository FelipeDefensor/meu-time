import { rest } from 'msw'

const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3/'

const countries = [
  { name: 'Brazil' },
  { name: 'Argentina' },
  { name: 'Peru' },
]

const countriesWithLeagues = {
  'Brazil': [
    {
      country: { name: 'Brazil' },
      league: { id: 1, name: 'Serie A', type: 'League', logo: 'https://logo.com/brasileirao-a' },
      seasons: [{ year: 2023, start: '2023-05-15', end: '2023-12-15' }],
    },
    {
      country: { name: 'Brazil' },
      league: { id: 2, name: 'Serie B', type: 'League', logo: 'https://logo.com/brasileirao-b' },
      seasons: [{ year: 2023, start: '2023-05-20', end: '2023-12-20' }],
    },
  ],
  'Argentina': [
    {
      country: { name: 'Argentina' },
      league: { id: 3, name: 'Superliga', type: 'League', logo: 'https://logo.com/superliga-argentina' },
      seasons: [
        { year: 2023, start: '2023-06-10', end: '2023-12-10' },
        { year: 2022, start: '2022-06-10', end: '2022-12-10' }
      ],
    },
    {
      country: { name: 'Argentina' },
      league: { id: 4, name: 'Primera B', type: 'League', logo: 'https://logo.com/primera-b-nacional' },
      seasons: [
        { year: 2023, start: '2023-06-10', end: '2023-12-10' },
        { year: 2022, start: '2022-06-10', end: '2022-12-10' }
      ],
    },
  ],
  'Peru': [
    {
      country: { name: 'Peru' },
      league: { id: 5, name: 'Liga 1', type: 'League', logo: 'https://logo.com/liga-1' },
      seasons: [
        { year: 2023, start: '2023-06-10', end: '2023-12-10' },
        { year: 2022, start: '2022-06-10', end: '2022-12-10' }
      ],
    },
    {
      country: { name: 'Peru' },
      league: { id: 6, name: 'Liga 2', type: 'League', logo: 'https://logo.com/liga-2' },
      seasons: [
        { year: 2023, start: '2023-06-10', end: '2023-12-10' },
        { year: 2022, start: '2022-06-10', end: '2022-12-10' }
      ],
    },
  ],
};





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
  
      if (!country || !countriesWithLeagues[country]) {
        return res(
          ctx.status(200),
          ctx.json({response: []})
        )
      }
      
      return res(
        ctx.status(200),
        ctx.json({response: countriesWithLeagues[country]})
      )
    })
]