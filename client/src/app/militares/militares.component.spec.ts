import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaresComponent } from './militares.component';

describe('MilitaresComponent', () => {
  let component: MilitaresComponent;
  let fixture: ComponentFixture<MilitaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
