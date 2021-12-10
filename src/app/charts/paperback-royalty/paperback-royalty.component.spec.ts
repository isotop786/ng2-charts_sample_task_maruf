import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperbackRoyaltyComponent } from './paperback-royalty.component';

describe('PaperbackRoyaltyComponent', () => {
  let component: PaperbackRoyaltyComponent;
  let fixture: ComponentFixture<PaperbackRoyaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperbackRoyaltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperbackRoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
