import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookRoyaltyComponent } from './ebook-royalty.component';

describe('EbookRoyaltyComponent', () => {
  let component: EbookRoyaltyComponent;
  let fixture: ComponentFixture<EbookRoyaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbookRoyaltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookRoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
