import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class PanelFormGroupService {

  constructor(private fb: FormBuilder) { }

  public formGroup: FormGroup = this.fb.group({
    'calendar': [null, Validators.required],
    'city': [null, Validators.required]
  });

  public getFormGroup(){
    return this.formGroup;
  }

}
