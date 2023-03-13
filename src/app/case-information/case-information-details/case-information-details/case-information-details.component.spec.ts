import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInformationDetailsComponent } from './case-information-details.component';

describe('CaseInformationDetailsComponent', () => {
  let component: CaseInformationDetailsComponent;
  let fixture: ComponentFixture<CaseInformationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInformationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseInformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
