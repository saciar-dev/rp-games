import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuenciaGameComponent } from './secuencia-game.component';

describe('SecuenciaGameComponent', () => {
  let component: SecuenciaGameComponent;
  let fixture: ComponentFixture<SecuenciaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuenciaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuenciaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
