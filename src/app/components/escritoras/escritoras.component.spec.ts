import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritorasComponent } from './escritoras.component';

describe('EscritorasComponent', () => {
  let component: EscritorasComponent;
  let fixture: ComponentFixture<EscritorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscritorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscritorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
