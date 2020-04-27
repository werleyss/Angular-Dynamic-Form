import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from 'src/app/dynamic-form/models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-button',
  styleUrls: ['./form-button.component.css'],
  template: `
    <div class="dynamic-field form-button" [formGroup]="group">
      <button type="submit" [disabled]="config.disabled">
        {{ config.label }}
      </button>
    </div>
  `,
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
