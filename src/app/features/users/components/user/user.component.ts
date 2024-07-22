import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user.model';
import { NgStyle } from '@angular/common';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user!: User;
}
