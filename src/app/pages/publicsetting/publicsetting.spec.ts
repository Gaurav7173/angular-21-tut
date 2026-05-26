import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicsetting } from './publicsetting';

describe('Publicsetting', () => {
  let component: Publicsetting;
  let fixture: ComponentFixture<Publicsetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicsetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publicsetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
