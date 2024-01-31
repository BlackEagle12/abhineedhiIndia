import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingSamplesComponent } from './casting-samples.component';

describe('CastingSamplesComponent', () => {
  let component: CastingSamplesComponent;
  let fixture: ComponentFixture<CastingSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastingSamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastingSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
