import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSelectorsViewerComponent } from './dropdown-selectors-viewer.component';

describe('DropdownSelectorsViewerComponent', () => {
  let component: DropdownSelectorsViewerComponent;
  let fixture: ComponentFixture<DropdownSelectorsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownSelectorsViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSelectorsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
