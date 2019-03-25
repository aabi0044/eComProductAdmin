import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntercatagoryComponent } from './entercatagory.component';

describe('EntercatagoryComponent', () => {
  let component: EntercatagoryComponent;
  let fixture: ComponentFixture<EntercatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntercatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntercatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
