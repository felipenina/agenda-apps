import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewContact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-edit-contact',
  imports: [],
  templateUrl: './new-edit-contact.html',
  styleUrl: './new-edit-contact.scss'
})
export class NewEditContact {
  contactsService = inject(ContactsService);
  router = inject(Router)
  errorEnBack = false;

  async createContact(form:NgForm){
    this.errorEnBack = false;
    const nuevoContacto: NewContact ={
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavourite: form.value.isFavourite
    }

    const res = await this.contactsService.createContact(nuevoContacto) as { id: string } | null;
    if(!res) {
      this.errorEnBack = true;
      return
    };
    this.router.navigate(["/contacts",res.id]);
  }
  
}
