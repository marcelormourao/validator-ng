import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PanelFormGroupService } from './panel-form-group.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: []
})
export class PanelComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private panelFormGroupService: PanelFormGroupService) {}

  public formGroup = this.panelFormGroupService.getFormGroup();

  public showLog() {
    console.log(this.formGroup);
  }

  ngOnInit() {
  }

}
