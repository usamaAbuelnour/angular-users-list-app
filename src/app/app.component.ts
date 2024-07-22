import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './features/users/components/users-list/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
