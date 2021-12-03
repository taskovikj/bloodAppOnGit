import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficitBtComponent } from './deficit-bt.component';

describe('DeficitBtComponent', () => {
  let component: DeficitBtComponent;
  let fixture: ComponentFixture<DeficitBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeficitBtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficitBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
