import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from 'src/app/dynamic-form/models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-select',
  styleUrls: ['./form-select.component.css'],
  template: `
    <div class="dynamic-field form-select" [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class FormSelectComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
