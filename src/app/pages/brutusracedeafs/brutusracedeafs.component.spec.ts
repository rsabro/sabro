import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrutusracedeafsComponent } from './brutusracedeafs.component';

describe('BrutusracedeafsComponent', () => {
  let component: BrutusracedeafsComponent;
  let fixture: ComponentFixture<BrutusracedeafsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrutusracedeafsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrutusracedeafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
