import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateREferenceVariablesANDTwoWayBindingComponent } from './template-reference-variables-andtwo-way-binding.component';

describe('TemplateREferenceVariablesANDTwoWayBindingComponent', () => {
  let component: TemplateREferenceVariablesANDTwoWayBindingComponent;
  let fixture: ComponentFixture<TemplateREferenceVariablesANDTwoWayBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateREferenceVariablesANDTwoWayBindingComponent]
    });
    fixture = TestBed.createComponent(TemplateREferenceVariablesANDTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
