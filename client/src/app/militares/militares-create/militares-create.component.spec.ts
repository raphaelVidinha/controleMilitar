import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaresCreateComponent } from './militares-create.component';

describe('MilitaresCreateComponent', () => {
  let component: MilitaresCreateComponent;
  let fixture: ComponentFixture<MilitaresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
