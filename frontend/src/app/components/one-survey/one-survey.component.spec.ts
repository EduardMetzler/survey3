import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSurveyComponent } from './one-survey.component';

describe('OneSurveyComponent', () => {
  let component: OneSurveyComponent;
  let fixture: ComponentFixture<OneSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
