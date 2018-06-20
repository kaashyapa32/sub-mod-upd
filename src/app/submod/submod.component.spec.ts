import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmodComponent } from './submod.component';

describe('SubmodComponent', () => {
  let component: SubmodComponent;
  let fixture: ComponentFixture<SubmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
