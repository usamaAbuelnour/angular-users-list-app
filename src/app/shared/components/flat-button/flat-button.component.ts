import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class FlatButton {
  @Input() text!: string;
  @Output() search = new EventEmitter();
  @Output() reset = new EventEmitter();
}
