import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaresShowComponent } from './militares-show.component';

describe('MilitaresShowComponent', () => {
  let component: MilitaresShowComponent;
  let fixture: ComponentFixture<MilitaresShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaresShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaresShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
