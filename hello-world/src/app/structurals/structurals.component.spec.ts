import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralsComponent } from './structurals.component';

describe('StructuralsComponent', () => {
  let component: StructuralsComponent;
  let fixture: ComponentFixture<StructuralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
