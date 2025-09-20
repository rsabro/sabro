import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSabroComponent } from './perfil-sabro.component';

describe('PerfilSabroComponent', () => {
  let component: PerfilSabroComponent;
  let fixture: ComponentFixture<PerfilSabroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSabroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSabroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
