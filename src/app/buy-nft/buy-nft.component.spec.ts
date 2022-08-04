import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNftComponent } from './buy-nft.component';

describe('BuyNftComponent', () => {
  let component: BuyNftComponent;
  let fixture: ComponentFixture<BuyNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
