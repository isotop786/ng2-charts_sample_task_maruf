import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSpendComponent } from './ad-spend.component';

describe('AdSpendComponent', () => {
  let component: AdSpendComponent;
  let fixture: ComponentFixture<AdSpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSpendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
