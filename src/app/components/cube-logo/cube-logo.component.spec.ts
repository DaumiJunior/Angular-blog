import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeLogoComponent } from './cube-logo.component';

describe('CubeLogoComponent', () => {
  let component: CubeLogoComponent;
  let fixture: ComponentFixture<CubeLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CubeLogoComponent]
    });
    fixture = TestBed.createComponent(CubeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
