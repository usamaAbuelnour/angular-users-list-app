import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
export class FormFieldComponent {
  @ViewChild('inputElement') inputElement!: ElementRef;
  // @Output() setEmail = new EventEmitter();

  // onInputChange(event: Event) {
  //   const inputElement = <HTMLInputElement>event.target;
  //   this.setEmail.emit(inputElement.value);
  // }
  clearInput() {
    this.inputElement.nativeElement.value = '';
    this.inputElement.nativeElement.blur();
  }
}
