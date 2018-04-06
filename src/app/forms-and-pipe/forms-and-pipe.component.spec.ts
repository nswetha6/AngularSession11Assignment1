import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAndPipeComponent } from './forms-and-pipe.component';

describe('FormsAndPipeComponent', () => {
  let component: FormsAndPipeComponent;
  let fixture: ComponentFixture<FormsAndPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsAndPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAndPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
