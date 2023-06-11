import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VheiclelistComponent } from './vheiclelist.component';

describe('VheiclelistComponent', () => {
  let component: VheiclelistComponent;
  let fixture: ComponentFixture<VheiclelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VheiclelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VheiclelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
