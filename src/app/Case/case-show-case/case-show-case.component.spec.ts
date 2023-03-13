import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseShowCaseComponent } from './case-show-case.component';

describe('CaseShowCaseComponent', () => {
  let component: CaseShowCaseComponent;
  let fixture: ComponentFixture<CaseShowCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseShowCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
