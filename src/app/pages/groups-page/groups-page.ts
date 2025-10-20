import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-groups-page',
  imports: [],
  templateUrl: './groups-page.html',
  styleUrl: './groups-page.scss'
})
export class GroupsPage {
  authService = inject(AuthService)
}
