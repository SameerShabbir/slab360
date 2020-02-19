import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class PricingComponent{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'new'];
  dataSource = Feature_Data;
}

export interface feature {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  new: string;
}

const Feature_Data: feature[] = [
  {position: 'CRM', name: 'tick' , weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Tasks & Projects',name: 'tick', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Communication', name: 'false', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Websites', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Online Store', name: 'tick', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Communication', name: 'false', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Websites', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Online Store', name: 'tick', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Communication', name: 'false', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Websites', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Online Store', name: 'tick', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Communication', name: 'false', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Websites', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Online Store', name: 'tick', weight: 'tick', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
  {position: 'Contact Center', name: 'false', weight: 'false', symbol:  'tick', new: 'tick'},
 
];
