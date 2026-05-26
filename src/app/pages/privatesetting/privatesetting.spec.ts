import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privatesetting } from './privatesetting';

describe('Privatesetting', () => {
  let component: Privatesetting;
  let fixture: ComponentFixture<Privatesetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privatesetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privatesetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
