import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCArdComponent } from './service-card.component';

describe('ServiceCArdComponent', () => {
  let component: ServiceCArdComponent;
  let fixture: ComponentFixture<ServiceCArdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCArdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCArdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
