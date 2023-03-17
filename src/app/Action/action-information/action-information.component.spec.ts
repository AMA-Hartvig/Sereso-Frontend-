import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInformationComponent } from './action-information.component';

describe('ActionInformationComponent', () => {
  let component: ActionInformationComponent;
  let fixture: ComponentFixture<ActionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
