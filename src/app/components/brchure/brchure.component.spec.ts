import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrchureComponent } from './brchure.component';

describe('BrchureComponent', () => {
  let component: BrchureComponent;
  let fixture: ComponentFixture<BrchureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrchureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrchureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
