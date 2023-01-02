import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAppSharedComponent } from './ngx-app-shared.component';

describe('NgxAppSharedComponent', () => {
  let component: NgxAppSharedComponent;
  let fixture: ComponentFixture<NgxAppSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAppSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAppSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
