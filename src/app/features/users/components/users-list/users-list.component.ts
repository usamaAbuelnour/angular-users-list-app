import { Component } from '@angular/core';
import { FormFieldComponent } from '../../../../shared/components/form-field/form-field.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [FormFieldComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

}
