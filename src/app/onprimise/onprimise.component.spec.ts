import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnprimiseComponent } from './onprimise.component';

describe('OnprimiseComponent', () => {
  let component: OnprimiseComponent;
  let fixture: ComponentFixture<OnprimiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnprimiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnprimiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
