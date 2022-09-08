import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HayaFenixLibraryComponent } from './haya-fenix-library.component';

describe('HayaFenixLibraryComponent', () => {
  let component: HayaFenixLibraryComponent;
  let fixture: ComponentFixture<HayaFenixLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HayaFenixLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HayaFenixLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
