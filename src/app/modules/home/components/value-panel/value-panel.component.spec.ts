import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuePanelComponent } from './value-panel.component';

describe('ValuePanelComponent', () => {
  let component: ValuePanelComponent;
  let fixture: ComponentFixture<ValuePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
