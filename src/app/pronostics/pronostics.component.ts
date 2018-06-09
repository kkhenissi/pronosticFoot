import { TableauFinalService } from './../matches/tableauFinal.service';

import { Component, OnInit, Input } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ResultatOrder, ResultatMatch } from '../interfaces/result-pot';


@Component({
  selector: 'app-pronostics',
  templateUrl: './pronostics.component.html',
  styleUrls: ['./pronostics.component.css']
})
export class PronosticsComponent  {
  data:  ResultatMatch[] = [];
  rowClassFunction: Function;

  constructor(private _tableaFinalService: TableauFinalService) {
     this._tableaFinalService.gettableaAafficher();
     this.initPronosTable();
  }


 tableaAaffiher: ResultatOrder[];
  /*
   * Define structure of table Ponostics
  */
 settings: any = { actions: false };


/**
 * methode qui recupère le tableau a afficher
 */
    onTableaAafficherPret(table) {
    this.data = table;
 }
/**
 * structure de la smart table
 */
initPronosTable() {
    this.settings = {
    actions: false,
    hideHeader: true,
    hideSubHeader: true,
      columns: {
      type: 'html',
      width: '4%',
      filter: true,
      m1: {
      },
      m2: {
      },
      m3: {
      },
      m4: {
      },
      m5: {
      },
      m6: {
      },
      m7: {
      },
      rowClassFunction: () => ''
    }
  };
}
}






