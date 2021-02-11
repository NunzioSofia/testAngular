import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-general-detail',
  templateUrl: './general-detail.component.html',
  styleUrls: ['./general-detail.component.css']
})
export class GeneralDetailComponent implements OnInit {
  @Input() title: string;
  @Input() currentValue?: number;
  @Input() topMeasurementDescription: string;
  @Input() maxValue?: number;
  @Input() bottomMeasurementDescription: string;
  @Input() bottomDescription: string;
  @Input() progressBarMode?: ProgressBarMode;

  constructor() { }

  ngOnInit(): void {
  }

  //#region GET

  public getCurrentValue(): number {
    return this.currentValue ?? 0;
  }

  public getCurrentPercentValue(): number {
    return ((this.currentValue * 100) / this.maxValue) ?? 0;
  }

  public getMaxValue(): number {
    return this.maxValue ?? 100;
  }

  public getTopMeasurementDescription(): string {
    return this.topMeasurementDescription;
  }

  public getBottomMeasurementDescription(): string {
    return this.bottomMeasurementDescription;
  }

  public getTitle(): string {
    return this.title;
  }

  public getBottomDescription(): string {
    return this.bottomDescription;
  }

  public getProgressBarMode(): ProgressBarMode {
    return this.progressBarMode ?? 'determinate';
  }

  //#endregion
}
