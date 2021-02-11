import { Component, Input } from '@angular/core';
import { Alert } from './alert';

@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.css']
})
export class DeviceStatusComponent {
  @Input() title: string;
  @Input() alertList: Alert[];

  constructor() { }

  

}
