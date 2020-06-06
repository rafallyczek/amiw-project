import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedFilmsComponent } from './top-rated-films.component';

describe('TopRatedFilmsComponent', () => {
  let component: TopRatedFilmsComponent;
  let fixture: ComponentFixture<TopRatedFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
