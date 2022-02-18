import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCalculadoraComponent } from './mini-calculadora.component';

describe('MiniCalculadoraComponent', () => {
  let component: MiniCalculadoraComponent;
  let fixture: ComponentFixture<MiniCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
