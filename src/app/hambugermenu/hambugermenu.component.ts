import { Component, Input, OnInit } from '@angular/core';
import {ELEMENTSMENU} from '../elenco-elementmenu';

@Component({
  selector: 'app-hambugermenu',
  templateUrl: './hambugermenu.component.html',
  styleUrls: ['./hambugermenu.component.css']
})
export class HambugermenuComponent implements OnInit {

  elementsmenu = ELEMENTSMENU;

  constructor() { }

  ngOnInit(): void {
  }

}
