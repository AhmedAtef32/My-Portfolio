import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickStartComponent } from './kick-start.component';

describe('KickStartComponent', () => {
  let component: KickStartComponent;
  let fixture: ComponentFixture<KickStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KickStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KickStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
