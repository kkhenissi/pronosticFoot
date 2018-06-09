import { Match } from './../interfaces/match';

import { ResultatOrder, ResultatMatch } from './../interfaces/result-pot';
import { MatchesService } from './matches.service';
import { TableauFinalService } from './tableauFinal.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToutCombPossibleSuMatchService } from './toutCombPossibleSuMatch.service';

import { Pronostic } from '../interfaces/pronostic';


@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent implements OnInit {
  canValidate: Boolean = true;
  @Output() tableaAafficherPret = new EventEmitter();
  head = '1'; head2 = 'X'; head3 = '2';
  used: boolean;
  compter = 0;
  /**
   * toutes les combinaisons possible pour  4 matches
   */
  toutCombPossibleSue4Match: Pronostic[];
  /**
   * structure du tableau final
   */
  tableauFinal: Pronostic[];
  lignePronos: ResultatMatch = {order: 0, m1: '', m2: '', m3: '', m4: '', m5: '', m6: '', m7: '' };
  tableaAafficher: ResultatMatch[] = [];

  // *************************************************
  bases: Match[];
  matches: Match[];
  constructor(
    private _toutCombPossibleSuMatchService: ToutCombPossibleSuMatchService,
    private _tableauFinalService: TableauFinalService,
    private _matchesService: MatchesService
  ) { }

  ngOnInit() {
    this.toutCombPossibleSue4Match = this._toutCombPossibleSuMatchService.getToutCombPossibleSue4Match();
    this.tableauFinal = this._tableauFinalService.getTableauFinal();
 //   console.log('tableau finale ds ngOnInit', this.tableauFinal);
    this.matches = this._matchesService.getMatches();
  }

  initialisetout() {
    this.matches.forEach(match => {
      this.canValidate = true;
      match.gagne = true;
      match.machnulle = true;
      match.perdu = true;
      this.tableaAafficher = [];
    //  this.tableauFinal = [];
      this.tableaAafficherPret.emit([]);
    });

  }
  fliterPronostic() {
    this.canValidate = false;
    /*
    *extraire l'ordre et la valeur mise en base de 3 matchs choisie ds la liste
    */
    this.bases = this.matches.filter(match => (match.gagne === true && (match.perdu === false && match.machnulle === false)) || (match.machnulle === true && (match.perdu === false && match.gagne === false)) || (match.perdu === true && (match.gagne === false && match.machnulle === false)));
    console.log('affiche les base ds leur rang', this.bases);
    /**
     * place les bases dans les bon endroits du tableaux finale
     */
    console.log('tableau finale avant affectation base', this.tableauFinal);
    this.bases.forEach(base => {
           this.tableauFinal.forEach(pronos => {
             this.matches.forEach(match => {
               if ( match.numero === base.numero ) {
                      pronos.pronostic.splice(base.numero - 1, 1 , {numero: base.numero, gagne: base.gagne, machnulle: base.machnulle, perdu: base.perdu});
               }
             });
             });
           });

    /**
     * remplir les rangs vide avec le tableau toutCombPossibleSue4Match
     */

this.tableauFinal.forEach(order => {
  order.pronostic.forEach(matche => {
    this.toutCombPossibleSue4Match.forEach( ordertcp => {
      if (order.order === ordertcp.order) {
         ordertcp.pronostic.forEach(matchetcp => {
          this.used = false;
          order.pronostic.forEach(orderpr => {

            if ((orderpr.gagne === null || orderpr.machnulle === null || orderpr.perdu === null) && this.used === false) {
               (orderpr.gagne = matchetcp.gagne, orderpr.machnulle = matchetcp.machnulle,  orderpr.perdu = matchetcp.perdu);
               this.used = true;
            }

            });

        });
      }
    });
  });
});

   /**
    * extraire les valeurs a true pour les afficher au user
    */
   console.log('coucou', this.tableauFinal);


  // console.log('jajoute au tableaAafficher ===>', this.lignePronos);

  // console.log('jajoute au tableaAafficher ===>', this.lignePronos);


 
   this.tableauFinal.forEach(pronos => {
//    console.log('numer match ==>', match);
    this.lignePronos.order = pronos.order;
    this.compter += 1;
    console.log('Compteur Order: ===>', this.compter);
    // console.log('orders ==>', pronos.order);
    // console.log('jajoute au tableaAafficher ===>', this.lignePronos);
    // this.tableaAafficher.push(this.lignePronos);
    // console.log('jajoute au tableaAafficher ===>', this.lignePronos);

      pronos.pronostic.forEach(match => {

       switch (match.numero) {

        case 1:
        console.log('je passe !!');
          if (match.gagne === true) {
            this.lignePronos.m1 = '1';
          } else if (match.machnulle === true) {
            this.lignePronos.m1 = 'X';
          } else if (match.perdu === true) {
            this.lignePronos.m1 = '2';
          }
          break;

        case 2:
        console.log('je passe aussi !!');
        if (match.gagne === true) {
          this.lignePronos.m2 = '1';
        } else if (match.machnulle === true) {
          this.lignePronos.m2 = 'X';
        } else if (match.perdu === true) {
          this.lignePronos.m2 = '2';
        }
        break;
        case 3:
        console.log('je passe 3!!');
        if (match.gagne === true) {
          this.lignePronos.m3 = '1';
        } else if (match.machnulle === true) {
          this.lignePronos.m3 = 'X';
        } else if (match.perdu === true) {
          this.lignePronos.m3 = '2';
        }
        break;
        case 4:
        if (match.gagne === true) {
          this.lignePronos.m4 = '1';
        } else if (match.machnulle === true) {
          this.lignePronos.m4 = 'X';
        } else if (match.perdu === true) {
          this.lignePronos.m4 = '2';
        }
        break;
        case 5:
        if (match.gagne === true) {
          this.lignePronos.m5 = '1';
        } else if (match.machnulle === true) {
          this.lignePronos.m5 = 'X';
        } else if (match.perdu === true) {
          this.lignePronos.m5 = '2';
        }
        break;
        case 6:
        if (match.gagne === true) {
          this.lignePronos.m6 = '1';
        } else if (match.machnulle === true) {
          this.lignePronos.m6 = 'X';
        } else if (match.perdu === true) {
          this.lignePronos.m6 = '2';
        }
        break;
        case 7:
        if (match.gagne === true) {
          this.lignePronos.m7 = '1';
        } else if (match.machnulle === true) {
          this.lignePronos.m7 = 'X';
        } else if (match.perdu === true) {
          this.lignePronos.m7 = '2';
        }
        this.tableaAafficher.push({order: this.lignePronos.order,
                                   m1:  this.lignePronos.m1,
                                   m2:  this.lignePronos.m2,
                                   m3:  this.lignePronos.m3,
                                   m4:  this.lignePronos.m4,
                                   m5:  this.lignePronos.m5,
                                   m6:  this.lignePronos.m6,
                                   m7:  this.lignePronos.m7});
        console.log('et maintenant ===>', this.tableaAafficher);
        break;




      }

    });

  });

  this.tableaAafficherPret.emit([]);
  this.tableaAafficherPret.emit(this.tableaAafficher);
}






}
