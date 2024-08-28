import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormPersonelComponent } from './ng-form-personel.component';

describe('NgFormPersonelComponent', () => {
  let component: NgFormPersonelComponent;
  let fixture: ComponentFixture<NgFormPersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFormPersonelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFormPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
