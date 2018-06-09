import { Injectable } from '@angular/core';
import { Match } from '../interfaces/match';

@Injectable()
export class MatchesService {
  private matches: Match[] = [
    {
      numero: 1,
      gagne: true,
      machnulle: true,
      perdu: true
    },
    {
      numero: 2,
      gagne: true,
      machnulle: true,
      perdu: true
    },
    {
      numero: 3,
      gagne: true,
      machnulle: true,
      perdu: true
    },
    {
      numero: 4,
      gagne: true,
      machnulle: true,
      perdu: true
    },
    {
      numero: 5,
      gagne: true,
      machnulle: true,
      perdu: true
    },
    {
      numero: 6,
      gagne: true,
      machnulle: true,
      perdu: true
    },
    {
      numero: 7,
      gagne: true,
      machnulle: true,
      perdu: true
    }
  ];
  getMatches() {
   return this.matches;
  }
}
