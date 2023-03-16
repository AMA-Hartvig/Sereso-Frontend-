import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInformationSectionDetailsComponent } from './case-information-section-details.component';

describe('CaseInformationSectionDetailsComponent', () => {
  let component: CaseInformationSectionDetailsComponent;
  let fixture: ComponentFixture<CaseInformationSectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInformationSectionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInformationSectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
