import { Component, inject } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logged-layout',
  imports: [RouterOutlet],
  templateUrl: './logged-layout.html',
  styleUrls: ['./logged-layout.scss']
})
export class LoggedLayout {
   authService = inject(AuthService)
   
   openLogoutModal(){
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Cancelar",
      denyButtonText: `Cerrar sesión`
    }).then((result: { isDenied: any; }) => {
      if (result.isDenied) { 
        this.authService.logout();
      }
    });
  }
}
