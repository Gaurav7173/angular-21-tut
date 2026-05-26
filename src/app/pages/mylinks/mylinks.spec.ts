import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mylinks } from './mylinks';

describe('Mylinks', () => {
  let component: Mylinks;
  let fixture: ComponentFixture<Mylinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mylinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mylinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
