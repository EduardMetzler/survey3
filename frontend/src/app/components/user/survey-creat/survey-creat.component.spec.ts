import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCreatComponent } from './survey-creat.component';

describe('SurveyCreatComponent', () => {
  let component: SurveyCreatComponent;
  let fixture: ComponentFixture<SurveyCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
