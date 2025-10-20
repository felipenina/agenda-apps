import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { contactService } from '../../services/contact.service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact-list-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrls: ['./contact-list-item.scss']
})
export class ContactListItem {
deleteContact() {
throw new Error('Method not implemented.');
}
  contact = input.required<Contact>();
  aleatorio = Math.random();
  contactService = inject(contactService);

  openDeleteModal(){
    Swal.fire({
      title: "¿Desea borrar el contacto?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Cancelar",
      denyButtonText: `Eliminar definitivamente`
    }).then((result) => {
      if (result.isDenied) { 
        this.contactService.deleteContact(this.contact().id);
      }
    });
  }
}