import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

/** @title Simple form field */
@Component({
  selector: 'form-field',
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  standalone: true,
  imports: [MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {}
