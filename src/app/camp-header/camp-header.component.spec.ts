import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampHeaderComponent } from './camp-header.component';

describe('CampHeaderComponent', () => {
  let component: CampHeaderComponent;
  let fixture: ComponentFixture<CampHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
