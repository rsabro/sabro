import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FesaiComponent } from './fesai.component';

describe('FesaiComponent', () => {
  let component: FesaiComponent;
  let fixture: ComponentFixture<FesaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FesaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FesaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
