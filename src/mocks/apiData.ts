const countries = [
    { name: 'Brazil', code: 'BR', flag: 'https://flags.example.com/br.svg' },
    { name: 'Argentina', code: 'AR', flag: 'https://flags.example.com/ar.svg' },
    { name: 'Peru', code: 'PE', flag: 'https://flags.example.com/pe.svg' },
  ]
  
const seasons = [
    { year: 2022, start: '2022-01-10', end: '2022-06-10' },
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

const teamToStatistics = {
    1: {
        "form": "WDLDWLDLDWLWDDWWDLWWLWLLDWWDWDWWWWDWDW",
        "fixtures": {
            "played": {
                "home": 19,
                "away": 19,
                "total": 38
            },
            "wins": {
                "home": 10,
                "away": 8,
                "total": 18
            },
            "draws": {
                "home": 7,
                "away": 5,
                "total": 12
            },
            "loses": {
                "home": 2,
                "away": 6,
                "total": 8
            }
        },
        "goals": {
            "for": {
                "total": {
                    "home": 40,
                    "away": 26,
                    "total": 66
                },
                "average": {
                    "home": "2.1",
                    "away": "1.4",
                    "total": "1.7"
                },
                "minute": {
                    "0-15": {
                        "total": 4,
                        "percentage": "6.06%"
                    },
                    "16-30": {
                        "total": 17,
                        "percentage": "25.76%"
                    },
                    "31-45": {
                        "total": 11,
                        "percentage": "16.67%"
                    },
                    "46-60": {
                        "total": 13,
                        "percentage": "19.70%"
                    },
                    "61-75": {
                        "total": 10,
                        "percentage": "15.15%"
                    },
                    "76-90": {
                        "total": 8,
                        "percentage": "12.12%"
                    },
                    "91-105": {
                        "total": 3,
                        "percentage": "4.55%"
                    },
                    "106-120": {
                        "total": null,
                        "percentage": null
                    }
                }
            },
            "against": {
                "total": {
                    "home": 17,
                    "away": 19,
                    "total": 36
                },
                "average": {
                    "home": "0.9",
                    "away": "1.0",
                    "total": "0.9"
                },
                "minute": {
                    "0-15": {
                        "total": 6,
                        "percentage": "16.67%"
                    },
                    "16-30": {
                        "total": 3,
                        "percentage": "8.33%"
                    },
                    "31-45": {
                        "total": 7,
                        "percentage": "19.44%"
                    },
                    "46-60": {
                        "total": 9,
                        "percentage": "25.00%"
                    },
                    "61-75": {
                        "total": 3,
                        "percentage": "8.33%"
                    },
                    "76-90": {
                        "total": 5,
                        "percentage": "13.89%"
                    },
                    "91-105": {
                        "total": 3,
                        "percentage": "8.33%"
                    },
                    "106-120": {
                        "total": null,
                        "percentage": null
                    }
                }
            }
        },
        "biggest": {
            "streak": {
                "wins": 4,
                "draws": 2,
                "loses": 2
            },
            "wins": {
                "home": "4-0",
                "away": "0-3"
            },
            "loses": {
                "home": "0-2",
                "away": "2-0"
            },
            "goals": {
                "for": {
                    "home": 5,
                    "away": 3
                },
                "against": {
                    "home": 2,
                    "away": 3
                }
            }
        },
        "clean_sheet": {
            "home": 7,
            "away": 6,
            "total": 13
        },
        "failed_to_score": {
            "home": 2,
            "away": 6,
            "total": 8
        },
        "penalty": {
            "scored": {
                "total": 10,
                "percentage": "100.00%"
            },
            "missed": {
                "total": 0,
                "percentage": "0%"
            },
            "total": 10
        },
        "lineups": [
            {
                "formation": "4-2-3-1",
                "played": 32
            },
            {
                "formation": "3-4-1-2",
                "played": 4
            },
            {
                "formation": "3-4-2-1",
                "played": 1
            },
            {
                "formation": "4-3-1-2",
                "played": 1
            }
        ],
        "cards": {
            "yellow": {
                "0-15": {
                    "total": 5,
                    "percentage": "6.85%"
                },
                "16-30": {
                    "total": 5,
                    "percentage": "6.85%"
                },
                "31-45": {
                    "total": 16,
                    "percentage": "21.92%"
                },
                "46-60": {
                    "total": 12,
                    "percentage": "16.44%"
                },
                "61-75": {
                    "total": 14,
                    "percentage": "19.18%"
                },
                "76-90": {
                    "total": 21,
                    "percentage": "28.77%"
                },
                "91-105": {
                    "total": null,
                    "percentage": null
                },
                "106-120": {
                    "total": null,
                    "percentage": null
                }
            },
            "red": {
                "0-15": {
                    "total": null,
                    "percentage": null
                },
                "16-30": {
                    "total": null,
                    "percentage": null
                },
                "31-45": {
                    "total": null,
                    "percentage": null
                },
                "46-60": {
                    "total": null,
                    "percentage": null
                },
                "61-75": {
                    "total": null,
                    "percentage": null
                },
                "76-90": {
                    "total": null,
                    "percentage": null
                },
                "91-105": {
                    "total": null,
                    "percentage": null
                },
                "106-120": {
                    "total": null,
                    "percentage": null
                }
            }
        }
    },
    2: {
        "form": "WDDDLDDWWDWWWWWWDDWDDDLLWWWWWLWWWLDWD",
        "fixtures": {
            "played": {
                "home": 19,
                "away": 18,
                "total": 37
            },
            "wins": {
                "home": 11,
                "away": 8,
                "total": 19
            },
            "draws": {
                "home": 6,
                "away": 7,
                "total": 13
            },
            "loses": {
                "home": 2,
                "away": 3,
                "total": 5
            }
        },
        "goals": {
            "for": {
                "total": {
                    "home": 36,
                    "away": 31,
                    "total": 67
                },
                "average": {
                    "home": "1.9",
                    "away": "1.7",
                    "total": "1.8"
                },
                "minute": {
                    "0-15": {
                        "total": 9,
                        "percentage": "14.06%"
                    },
                    "16-30": {
                        "total": 8,
                        "percentage": "12.50%"
                    },
                    "31-45": {
                        "total": 9,
                        "percentage": "14.06%"
                    },
                    "46-60": {
                        "total": 13,
                        "percentage": "20.31%"
                    },
                    "61-75": {
                        "total": 11,
                        "percentage": "17.19%"
                    },
                    "76-90": {
                        "total": 11,
                        "percentage": "17.19%"
                    },
                    "91-105": {
                        "total": 3,
                        "percentage": "4.69%"
                    },
                    "106-120": {
                        "total": null,
                        "percentage": null
                    }
                }
            },
            "against": {
                "total": {
                    "home": 14,
                    "away": 18,
                    "total": 32
                },
                "average": {
                    "home": "0.7",
                    "away": "1.0",
                    "total": "0.9"
                },
                "minute": {
                    "0-15": {
                        "total": 6,
                        "percentage": "17.14%"
                    },
                    "16-30": {
                        "total": 4,
                        "percentage": "11.43%"
                    },
                    "31-45": {
                        "total": 4,
                        "percentage": "11.43%"
                    },
                    "46-60": {
                        "total": 6,
                        "percentage": "17.14%"
                    },
                    "61-75": {
                        "total": 7,
                        "percentage": "20.00%"
                    },
                    "76-90": {
                        "total": 7,
                        "percentage": "20.00%"
                    },
                    "91-105": {
                        "total": 1,
                        "percentage": "2.86%"
                    },
                    "106-120": {
                        "total": null,
                        "percentage": null
                    }
                }
            }
        },
        "biggest": {
            "streak": {
                "wins": 6,
                "draws": 3,
                "loses": 2
            },
            "wins": {
                "home": "6-1",
                "away": "1-5"
            },
            "loses": {
                "home": "0-2",
                "away": "3-0"
            },
            "goals": {
                "for": {
                    "home": 6,
                    "away": 5
                },
                "against": {
                    "home": 3,
                    "away": 3
                }
            }
        },
        "clean_sheet": {
            "home": 9,
            "away": 5,
            "total": 14
        },
        "failed_to_score": {
            "home": 5,
            "away": 6,
            "total": 11
        },
        "penalty": {
            "scored": {
                "total": 6,
                "percentage": "100.00%"
            },
            "missed": {
                "total": 0,
                "percentage": "0%"
            },
            "total": 6
        },
        "lineups": [
            {
                "formation": "4-3-3",
                "played": 37
            }
        ],
        "cards": {
            "yellow": {
                "0-15": {
                    "total": 3,
                    "percentage": "4.92%"
                },
                "16-30": {
                    "total": 8,
                    "percentage": "13.11%"
                },
                "31-45": {
                    "total": 7,
                    "percentage": "11.48%"
                },
                "46-60": {
                    "total": 13,
                    "percentage": "21.31%"
                },
                "61-75": {
                    "total": 9,
                    "percentage": "14.75%"
                },
                "76-90": {
                    "total": 8,
                    "percentage": "13.11%"
                },
                "91-105": {
                    "total": 11,
                    "percentage": "18.03%"
                },
                "106-120": {
                    "total": null,
                    "percentage": null
                },
                "": {
                    "total": 2,
                    "percentage": "3.28%"
                }
            },
            "red": {
                "0-15": {
                    "total": null,
                    "percentage": null
                },
                "16-30": {
                    "total": 1,
                    "percentage": "100.00%"
                },
                "31-45": {
                    "total": null,
                    "percentage": null
                },
                "46-60": {
                    "total": null,
                    "percentage": null
                },
                "61-75": {
                    "total": null,
                    "percentage": null
                },
                "76-90": {
                    "total": null,
                    "percentage": null
                },
                "91-105": {
                    "total": null,
                    "percentage": null
                },
                "106-120": {
                    "total": null,
                    "percentage": null
                }
            }
        }
    }
}


const leagueToTeams = {
    1: countryToTeams['Brazil'],
    2: countryToTeams['Brazil'],
    3: countryToTeams['Argentina'],
    4: countryToTeams['Argentina'],
    5: countryToTeams['Peru'],
    6: countryToTeams['Peru']
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

  
export {countries, seasons, countryToTeams, players, countryToLeagueDetail, leagueToTeams, teamToStatistics}