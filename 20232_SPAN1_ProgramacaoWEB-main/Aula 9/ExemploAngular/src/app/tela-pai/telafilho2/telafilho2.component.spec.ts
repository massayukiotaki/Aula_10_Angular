import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telafilho2Component } from './telafilho2.component';

describe('Telafilho2Component', () => {
  let component: Telafilho2Component;
  let fixture: ComponentFixture<Telafilho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Telafilho2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Telafilho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
