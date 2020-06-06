import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingFilmsComponent } from './trending-films.component';

describe('TrendingFilmsComponent', () => {
  let component: TrendingFilmsComponent;
  let fixture: ComponentFixture<TrendingFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
