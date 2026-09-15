import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsepAcessivelComponent } from './insep-acessivel.component';

describe('InsepAcessivelComponent', () => {
  let component: InsepAcessivelComponent;
  let fixture: ComponentFixture<InsepAcessivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsepAcessivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsepAcessivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
