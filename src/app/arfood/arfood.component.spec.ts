import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArfoodComponent } from './arfood.component';

describe('ArfoodComponent', () => {
  let component: ArfoodComponent;
  let fixture: ComponentFixture<ArfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
