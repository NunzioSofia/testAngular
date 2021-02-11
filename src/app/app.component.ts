import { Component } from '@angular/core';
import { Alert } from './device-status/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  newArray: Array<any> = [
    {
      value: 3.6,
      title: 'Power',
      maxValue: 6000,
      topM: 'kW',
      bottomM: '',
      bottomD: 'NOMINAL'
    },{
      value: 7.6,
      title: 'Power',
      maxValue: 7000,
      topM: 'kW',
      bottomM: '',
      bottomD: 'NOMINAL'
    },
    {
      value: 7.6,
      title: 'Power',
      maxValue: 7000,
      topM: 'kW',
      bottomM: '',
      bottomD: 'NOMINAL'
    },{
      value: 7.6,
      title: 'Power',
      maxValue: 7000,
      topM: 'kW',
      bottomM: '',
      bottomD: 'NOMINAL'
    }
  ];
  
  alertLi:Array<Alert>=[
    {
      icon:"info",
      value:2456,
      color:"black",

    },
    {
      icon:"info",
      value:2456,
      color:"black",

    },
    {
      icon:"home",
      value:2456,
      color:"black",

    },
    {
      icon:"info",
      value:2456,
      color:"black",

    },
    {
      icon:"info",
      value:2456,
      color:"black",

    }
  ]
}
