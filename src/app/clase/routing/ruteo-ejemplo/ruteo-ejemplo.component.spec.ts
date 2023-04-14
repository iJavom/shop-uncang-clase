import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuteoEjemploComponent } from './ruteo-ejemplo.component';

describe('RuteoEjemploComponent', () => {
  let component: RuteoEjemploComponent;
  let fixture: ComponentFixture<RuteoEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuteoEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuteoEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
