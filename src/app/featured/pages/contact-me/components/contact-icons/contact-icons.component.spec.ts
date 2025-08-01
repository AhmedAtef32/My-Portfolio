import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIconsComponent } from './contact-icons.component';

describe('ContactIconsComponent', () => {
  let component: ContactIconsComponent;
  let fixture: ComponentFixture<ContactIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
