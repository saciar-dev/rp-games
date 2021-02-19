import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionGameComponent } from './clasificacion-game.component';

describe('ClasificacionGameComponent', () => {
  let component: ClasificacionGameComponent;
  let fixture: ComponentFixture<ClasificacionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificacionGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
