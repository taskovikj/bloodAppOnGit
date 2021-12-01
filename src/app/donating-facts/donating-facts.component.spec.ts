import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatingFactsComponent } from './donating-facts.component';

describe('DonatingFactsComponent', () => {
  let component: DonatingFactsComponent;
  let fixture: ComponentFixture<DonatingFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatingFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatingFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
