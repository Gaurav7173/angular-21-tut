import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamiccomponent } from './dynamiccomponent';

describe('Dynamiccomponent', () => {
  let component: Dynamiccomponent;
  let fixture: ComponentFixture<Dynamiccomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamiccomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamiccomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
