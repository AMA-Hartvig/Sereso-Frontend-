import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyLoaderComponent } from './fancy-loader.component';

describe('FancyLoaderComponent', () => {
  let component: FancyLoaderComponent;
  let fixture: ComponentFixture<FancyLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
