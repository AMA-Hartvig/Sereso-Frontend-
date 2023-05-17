import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPresentatorComponent } from './visual-presentator.component';

describe('VisualPresentatorComponent', () => {
  let component: VisualPresentatorComponent;
  let fixture: ComponentFixture<VisualPresentatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualPresentatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualPresentatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
