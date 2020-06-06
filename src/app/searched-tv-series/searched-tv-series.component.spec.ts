import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedTvSeriesComponent } from './searched-tv-series.component';

describe('SearchedTvSeriesComponent', () => {
  let component: SearchedTvSeriesComponent;
  let fixture: ComponentFixture<SearchedTvSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedTvSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
