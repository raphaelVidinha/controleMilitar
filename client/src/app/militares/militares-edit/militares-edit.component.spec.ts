import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaresEditComponent } from './militares-edit.component';

describe('MilitaresEditComponent', () => {
  let component: MilitaresEditComponent;
  let fixture: ComponentFixture<MilitaresEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaresEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
