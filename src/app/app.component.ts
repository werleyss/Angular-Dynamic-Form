import { Component } from '@angular/core';
import { FieldConfig } from './dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="app">
    <app-dynamic-form [config]="config"></app-dynamic-form>
  </div>
  `,
})
export class AppComponent {
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Nome completo',
      name: 'nome',
      placeholder: 'Digite seu nome'
    },
    {
      type: 'select',
      label: 'Comida favorita',
      name: 'comida',
      options: ['Pizza', 'Hot dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Selecione uma opção',
    },
    {
      label: 'Enviar',
      name: 'submit',
      type: 'button',
    }
  ];
}
