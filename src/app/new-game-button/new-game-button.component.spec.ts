import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameButtonComponent } from './new-game-button.component';

describe('NewGameButtonComponent', () => {
  let component: NewGameButtonComponent;
  let fixture: ComponentFixture<NewGameButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGameButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
