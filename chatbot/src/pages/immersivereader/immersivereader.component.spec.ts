import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmersivereaderComponent } from './immersivereader.component';

describe('ImmersivereaderComponent', () => {
  let component: ImmersivereaderComponent;
  let fixture: ComponentFixture<ImmersivereaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmersivereaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmersivereaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
