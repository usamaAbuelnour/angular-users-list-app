import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormFieldComponent } from '../../../../shared/components/form-field/form-field.component';
import { FlatButton } from '../../../../shared/components/flat-button/flat-button.component';
import { UserComponent } from '../user/user.component';
import usersAPI from '../../../../../../data/users.json';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    FormFieldComponent,
    FlatButton,
    UserComponent,
    FormsModule,
    NgClass,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements AfterViewInit {
  @ViewChild(FormFieldComponent) formFieldChild!: FormFieldComponent;

  users: any = JSON.parse(JSON.stringify(usersAPI));

  ngAfterViewInit(): void {
    this.formFieldChild.inputElement.nativeElement.focus();
  }

  search() {
    let inputValue = this.formFieldChild.inputElement.nativeElement.value;
    if (!inputValue) return;
    const user = usersAPI.find((user) => user.email === inputValue);
    if (user) this.users = [user];
    else this.users.length = 0;
  }

  reset(): void {
    this.formFieldChild.clearInput();
    this.users = JSON.parse(JSON.stringify(usersAPI));
    this.formFieldChild.inputElement.nativeElement.focus();
  }
}
