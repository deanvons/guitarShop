import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiterListPageComponent } from './guiter-list-page.component';

describe('GuiterListPageComponent', () => {
  let component: GuiterListPageComponent;
  let fixture: ComponentFixture<GuiterListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiterListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
