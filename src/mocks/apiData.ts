const countries = [
    { name: 'Brazil', code: 'BR', flag: 'https://flags.example.com/br.svg' },
    { name: 'Argentina', code: 'AR', flag: 'https://flags.example.com/ar.svg' },
    { name: 'Peru', code: 'PE', flag: 'https://flags.example.com/pe.svg' },
  ]
  
const seasons = [
    { year: 2023, start: '2023-01-10', end: '2023-06-10' },
    { year: 2023, start: '2023-06-11', end: '2023-12-10' }
  ]
  
 const players = [
    // Brazilian Players
    [
      { age: 23, id: 1, name: 'Lucas Santos', number: 10, photo: '', position: 'Forward', nationality: 'Brazil' },
      { age: 25, id: 2, name: 'Diego Silva', number: 7, photo: '', position: 'Midfielder', nationality: 'Brazil' },
      { age: 27, id: 3, name: 'Carlos Pereira', number: 1, photo: '', position: 'Goalkeeper', nationality: 'Brazil' }
    ],
    // Argentinian Players
    [
      { age: 26, id: 4, name: 'Javier Perez', number: 9, photo: '', position: 'Forward', nationality: 'Argentina'},
      { age: 24, id: 5, name: 'Miguel Rodriguez', number: 8, photo: '', position: 'Midfielder', nationality: 'Argentina' },
      { age: 29, id: 6, name: 'Fernando Garcia', number: 1, photo: '', position: 'Goalkeeper', nationality: 'Argentina' }
    ],
    // Peruvian Players
    [
      { age: 25, id: 7, name: 'Luis Morales', number: 11, photo: '', position: 'Forward', nationality: 'Peru'},
      { age: 26, id: 8, name: 'Pedro Gomez', number: 6, photo: '', position: 'Midfielder', nationality: 'Peru' },
      { age: 28, id: 9, name: 'Juan Sanchez', number: 1, photo: '', position: 'Goalkeeper', nationality: 'Peru' }
    ]
  ]
  
const countryToTeams = {
    'Brazil': [
      {
        team: {
          code: 'FLA', country: 'Brazil', founded: 1895, id: 1, logo: '',
          name: 'Flamengo', national: false
        },
        venue: {},
        players: players[0]
      },
      {
        team: {
          code: 'PAL', country: 'Brazil', founded: 1914, id: 2, logo: '',
          name: 'Palmeiras', national: false
        },
        venue: {},
        players: players[0]
      }
    ],
    'Argentina': [
      {
        team: {
          code: 'BOCA', country: 'Argentina', founded: 1905, id: 3, logo: '',
          name: 'Boca Juniors', national: false
        },
        venue: {},
        players: players[1]
      },
      {
        team: {
          code: 'RIVER', country: 'Argentina', founded: 1901, id: 4, logo: '',
          name: 'River Plate', national: false
        },
        venue: {},
        players: players[1]
      }
    ],
    'Peru': [
      {
        team: {
          code: 'AL', country: 'Peru', founded: 1926, id: 5, logo: '',
          name: 'Alianza Lima', national: false
        },
        venue: {},
        players: players[2]
      },
      {
        team: {
          code: 'UNI', country: 'Peru', founded: 1924, id: 6, logo: '',
          name: 'Universitario', national: false
        },
        venue: {},
        players: players[2]
      }
    ]
  }

const countryToLeagueDetail = {
    'Brazil': [
        {
        country: countries[0],
        league: { id: 1, name: 'Serie A', type: 'League', logo: '' },
        seasons,
        teams: countryToTeams['Brazil']
      },
      {
        country: countries[0],
        league: { id: 2, name: 'Serie B', type: 'League', logo: '' },
        seasons,
        teams: countryToTeams['Brazil']
      }
    ],
    'Argentina' :  [
        {
            country: countries[1],
            league: { id: 3, name: 'Primera Division', type: 'League', logo: '' },
            seasons,
            teams: countryToTeams['Argentina']
          },
          {
            country: countries[1],
            league: { id: 4, name: 'Primera B', type: 'League', logo: '' },
            seasons,
            teams: countryToTeams['Argentina']
          },
    ],
    'Peru': [
        {
            country: { name: 'Peru', code: 'PE', flag: '' },
            league: { id: 5, name: 'Liga 1', type: 'League', logo: '' },
            seasons,
            teams: countryToTeams['Peru']
          },
          {
            country: { name: 'Peru', code: 'PE', flag: '' },
            league: { id: 6, name: 'Liga 2', type: 'League', logo: '' },
            seasons,
            teams: countryToTeams['Peru']
          }
        ]
}

  
export {countries, seasons, countryToTeams, players, countryToLeagueDetail}