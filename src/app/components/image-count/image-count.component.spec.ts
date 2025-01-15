import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCountComponent } from './image-count.component';

describe('ImageCountComponent', () => {
  let component: ImageCountComponent;
  let fixture: ComponentFixture<ImageCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
