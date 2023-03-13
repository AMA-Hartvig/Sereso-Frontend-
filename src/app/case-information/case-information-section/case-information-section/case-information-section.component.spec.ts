import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInformationSectionComponent } from './case-information-section.component';

describe('CaseInformationSectionComponent', () => {
  let component: CaseInformationSectionComponent;
  let fixture: ComponentFixture<CaseInformationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInformationSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInformationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
