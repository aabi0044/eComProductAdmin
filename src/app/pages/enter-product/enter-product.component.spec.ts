import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterProductComponent } from './enter-product.component';

describe('EnterProductComponent', () => {
  let component: EnterProductComponent;
  let fixture: ComponentFixture<EnterProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
