import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AritmeticaGameComponent } from './aritmetica-game.component';

describe('AritmeticaGameComponent', () => {
  let component: AritmeticaGameComponent;
  let fixture: ComponentFixture<AritmeticaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AritmeticaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AritmeticaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
