import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmistionsComponent } from './admistions.component';

describe('AdmistionsComponent', () => {
  let component: AdmistionsComponent;
  let fixture: ComponentFixture<AdmistionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmistionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmistionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
