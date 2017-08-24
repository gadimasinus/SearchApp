import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsearchComponent } from './textsearch.component';

describe('TextsearchComponent', () => {
  let component: TextsearchComponent;
  let fixture: ComponentFixture<TextsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
