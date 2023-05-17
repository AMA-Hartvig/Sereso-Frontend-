import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAddedComponent } from './action-added.component';

describe('ActionAddedComponent', () => {
  let component: ActionAddedComponent;
  let fixture: ComponentFixture<ActionAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
