import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdImpressionsComponent } from './ad-impressions.component';

describe('AdImpressionsComponent', () => {
  let component: AdImpressionsComponent;
  let fixture: ComponentFixture<AdImpressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdImpressionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdImpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
