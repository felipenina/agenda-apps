import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { NewContact } from '../../interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { contactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem, FormsModule],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage {

  authService = inject(AuthService);
  contactsService = inject(contactService);
contactService: any;

  createContact(form:any){
    const nuevoContacto: NewContact ={
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      address: form.adress,
      image: form.image,
      number: form.number,
      company: form.company,
      isFavourite: form.isFavorite
    }

    this.contactsService.createContact(nuevoContacto)
  }
}
