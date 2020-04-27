import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, Type, ComponentRef, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

import { Field } from 'src/app/dynamic-form/models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

@Directive({ selector: '[appDynamicField]' })

export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]){
      const supportedTypes = Object.keys(components).join(',');
      throw new Error(
        `Tentando usar um tipo não suportado (${this.config.type}).
        Tipos suportados: ${supportedTypes}`
      );
    }

    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
