import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHandlerComponent } from './project-handler.component';

describe('ProjectHandlerComponent', () => {
  let component: ProjectHandlerComponent;
  let fixture: ComponentFixture<ProjectHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
