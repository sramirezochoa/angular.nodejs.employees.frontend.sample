import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLeftPanelComponent } from './app-left-panel.component';

describe('AppLeftPanelComponent', () => {
  let component: AppLeftPanelComponent;
  let fixture: ComponentFixture<AppLeftPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLeftPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
