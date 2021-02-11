import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HambugermenuComponent } from './hambugermenu.component';

describe('HambugermenuComponent', () => {
  let component: HambugermenuComponent;
  let fixture: ComponentFixture<HambugermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HambugermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HambugermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
