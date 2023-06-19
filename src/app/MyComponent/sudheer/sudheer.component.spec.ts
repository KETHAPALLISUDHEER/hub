import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudheerComponent } from './sudheer.component';

describe('SudheerComponent', () => {
  let component: SudheerComponent;
  let fixture: ComponentFixture<SudheerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SudheerComponent]
    });
    fixture = TestBed.createComponent(SudheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
