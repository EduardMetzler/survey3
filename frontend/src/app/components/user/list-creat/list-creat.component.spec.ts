import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreatComponent } from './list-creat.component';

describe('ListCreatComponent', () => {
  let component: ListCreatComponent;
  let fixture: ComponentFixture<ListCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
