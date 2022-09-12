import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapButtonComponent } from './wrap-button.component';

describe('WrapButtonComponent', () => {
  let component: WrapButtonComponent;
  let fixture: ComponentFixture<WrapButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
