import { Match } from './../interfaces/match';
import { Pronostic } from './../interfaces/pronostic';
// import { Match } from './../models/match/match.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ToutCombPossibleSuMatchService  {
   private toutCombPossibleSue4Match: Pronostic[] = [
    {
      order: 1, pronostic: [
        {
          numero: 1,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        },
      ]
    },


    {
      order: 2, pronostic: [
        {
          numero: 1,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
           machnulle: true,
          perdu: false
        }
      ]
    },

    {
      order: 3, pronostic: [
        {
          numero: 1,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
           machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 4, pronostic: [
        {
          numero: 1,
          gagne: true,
           machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
           machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 5, pronostic: [
        {
          numero: 1,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        },

      ]
    },

    {
      order: 6, pronostic: [
        {
          numero: 1,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        },

      ]
    },

    {
      order: 7, pronostic: [
        {
          numero: 1,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
           machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 8, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
           machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 9, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        },

      ]
    },

    {
      order: 10, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
           machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
           machnulle: true,
          perdu: false
        },

      ]
    },
    {
      order: 11, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        },
      ]
    },


    {
      order: 12, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },

    {
      order: 13, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        },

      ]
    },

    {
      order: 14, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 15, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        },

      ]
    },

    {
      order: 16, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 17, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 18, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        },

      ]
    },

    {
      order: 19, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        },

      ]
    },

    {
      order: 20, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        },

      ]
    },
    {
      order: 21, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 22, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 23, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
    ]
    },
    {
      order: 24, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 25, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 26, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 27, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 28, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 29, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 30, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 31, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 32, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 33, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
    ]
    },
    {
      order: 34, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 35, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 36, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 37, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 38, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 39, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 40, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 41, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 42, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 43, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
    ]
    },
    {
      order: 44, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 45, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 46, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 47, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 48, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 49, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 50, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 51, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 52, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 53, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
    ]
    },
    {
      order: 54, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 55, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 56, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 57, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 58, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 59, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 60, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: false
        }
      ]
    },
    {
      order: 61, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 62, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 63, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
    ]
    },
    {
      order: 64, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 65, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 66, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 67, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 68, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 69, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 70, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 71, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 72, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 73, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
    ]
    },
    {
      order: 74, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 75, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 76, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: true,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: true,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: true,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: true,
          perdu: true
        }
      ]
    },
    {
      order: 77, pronostic: [
        {
          numero: 1,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: true,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: true,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 78, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: true
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: true
        }
      ]
    },
    {
      order: 79, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: false
        }
      ]
    },
    {
      order: 80, pronostic: [
        {
          numero: 1,
          gagne: false,
          machnulle: false,
          perdu: false
        },
        {
          numero: 2,
          gagne: false,
          machnulle: false,
          perdu: false
        },
        {
          numero: 3,
          gagne: false,
          machnulle: false,
          perdu: false
        },
        {
          numero: 4,
          gagne: false,
          machnulle: false,
          perdu: false
        }
      ]
    },


  ];
getToutCombPossibleSue4Match(): Pronostic[]  {
    return this.toutCombPossibleSue4Match;

}
}
