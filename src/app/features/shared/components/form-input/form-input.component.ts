import {Component, Input, OnInit} from '@angular/core';
import {ErrorFieldsFocusService} from "../../service/ErrorFieldsFocous/error-fields-focus.service";
import {FormGroup} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field/form-field";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() public controlName: string;
  @Input() public errorMessage: string;
  @Input() public placeholder: string;
  @Input() public label: string;
  @Input() public type: string;
  @Input() public iconName: string;
  @Input() public apparence: MatFormFieldAppearance;
  @Input() public isRequired: false;
  @Input() public isPasswordField: false;
  @Input() public form: FormGroup;

  public hide = true;

  constructor(public readonly errorFieldsFocusService: ErrorFieldsFocusService) {
  }

  public ngOnInit(): void {
  }

}
