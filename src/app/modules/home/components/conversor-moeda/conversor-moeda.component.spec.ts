import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorMoedaComponent } from './conversor-moeda.component';

describe('ConversorMoedaComponent', () => {
  let component: ConversorMoedaComponent;
  let fixture: ComponentFixture<ConversorMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorMoedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
