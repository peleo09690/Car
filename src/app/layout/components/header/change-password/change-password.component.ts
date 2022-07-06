import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogOption } from '@common/components/dialog-seach/dialog-seach.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOption
  ) {
    this.dialogRef.addPanelClass('change-pwd-page');
    this.dialogRef.disableClose = true;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  showConfirmPassword: boolean = false;
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  showNewPassword: boolean = false;
  public changePasswordForm!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  ngOnInit(): void {
    this.initialForm();
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-member-accessibility
  initialForm() {
    this.changePasswordForm = this.fb.group({
      newPassword: [''],
      confirmPassword: ['']
    });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-member-accessibility
  toggleNewPassWord() {
    this.showNewPassword = !this.showNewPassword;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-member-accessibility
  toggleConfirmPassWord() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-member-accessibility
  submitForm() {
    console.log(this.changePasswordForm.value);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-member-accessibility
  closePopup() {
    this.dialogRef.close();
  }

}
