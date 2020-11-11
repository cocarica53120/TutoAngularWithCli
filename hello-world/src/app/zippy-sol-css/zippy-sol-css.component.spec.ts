import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippySolCssComponent } from './zippy-sol-css.component';

describe('ZippySolCssComponent', () => {
  let component: ZippySolCssComponent;
  let fixture: ComponentFixture<ZippySolCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippySolCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippySolCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
