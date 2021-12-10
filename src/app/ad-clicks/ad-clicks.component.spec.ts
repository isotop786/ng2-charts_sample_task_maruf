import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdClicksComponent } from './ad-clicks.component';

describe('AdClicksComponent', () => {
  let component: AdClicksComponent;
  let fixture: ComponentFixture<AdClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
