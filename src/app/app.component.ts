import { Component, ViewChildren, QueryList, ContentChildren } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { Button } from 'primeng/primeng';
import { PanelFormGroupService } from './panel/panel-form-group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private fb: FormBuilder,
    private panelFormGroupService: PanelFormGroupService
  ) {}

  @ViewChild('panel') private panel: PanelComponent;

  @ViewChildren(PanelComponent) private botoes: QueryList<PanelComponent>;

  @ViewChildren(Button) private botoes2: QueryList<PanelComponent>;

  @ViewChildren(FormGroup) private formGroupApp: QueryList<PanelComponent>;

  @ContentChildren('formGroup') private formGroupApp2: QueryList<PanelComponent>;
  
  public validate(){
    // debugger
    this.validateFormGroup([
      this.formGroup,
      // this.panel.formGroup
      this.panelFormGroupService.getFormGroup()
    ]);

    this.botoes.forEach(p => p.showLog());

    console.log(this.botoes2);

    console.log(this.formGroupApp);

    console.log(this.formGroupApp2);
  }

  public addValidations(){
    this.addRequiredValidationsFormGroup([
      this.formGroup,
      this.panelFormGroupService.getFormGroup()
    ]);
  }

  public removeValidations(){
    this.removeValidationsFormGroup([
      this.formGroup,
      this.panelFormGroupService.getFormGroup()
    ]);
  }

  private validateFormGroup(formGroups : FormGroup[]){
    for (const formGroup of formGroups) {
      for (const controlName in formGroup.controls) {
        formGroup.controls[controlName].markAsTouched();
      } 
    }
  }

  private addRequiredValidationsFormGroup(formGroups : FormGroup[]){
    for (const formGroup of formGroups) {
      for (const controlName in formGroup.controls) {
        formGroup.controls[controlName].setValidators([Validators.required]);
        formGroup.controls[controlName].updateValueAndValidity();
      } 
    }
  }

  private removeValidationsFormGroup(formGroups : FormGroup[]){
    for (const formGroup of formGroups) {
      for (const controlName in formGroup.controls) {
        formGroup.controls[controlName].setValidators([]);
        formGroup.controls[controlName].updateValueAndValidity();
      } 
    }
  }

  public formGroup: FormGroup = this.fb.group({
    'calendarForaPanel': [null, Validators.required]
  });
}
