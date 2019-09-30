import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospetalComponent } from './hospetal.component';

describe('HospetalComponent', () => {
  let component: HospetalComponent;
  let fixture: ComponentFixture<HospetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
