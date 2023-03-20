import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopComponentComponent } from './pop-component.component';

describe('PopComponentComponent', () => {
  let component: PopComponentComponent;
  let fixture: ComponentFixture<PopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
