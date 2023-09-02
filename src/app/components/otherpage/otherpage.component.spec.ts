import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherpageComponent } from './otherpage.component';

describe('OtherpageComponent', () => {
  let component: OtherpageComponent;
  let fixture: ComponentFixture<OtherpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherpageComponent]
    });
    fixture = TestBed.createComponent(OtherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
