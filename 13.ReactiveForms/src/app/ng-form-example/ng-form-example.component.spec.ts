import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormExampleComponent } from './ng-form-example.component';

describe('NgFormExampleComponent', () => {
  let component: NgFormExampleComponent;
  let fixture: ComponentFixture<NgFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFormExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
