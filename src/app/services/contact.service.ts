import { Injectable } from '@angular/core';
import {Contact, NewContact} from "../interfaces/contact";

@Injectable({
  providedIn: 'root'
})
export class contactService {
aleatorio = Math.random

  contacts: Contact[] = [
    {
      id: "1",
      firstName: 'Felipe',
      lastName: "Nina",
      number: "46847855",
      image: "",
      company: "",
      address: "",
      email: 'fnina@austral.edu.ar',
      isFavourite: true,
    },
    
  ]

    getContacts() { }

  /** Devuelve un contato en particular segun su ID */
  getContactById() {

  }

  /** Crea un contacto */
  createContact(nuevoContacto:NewContact) {
    const contacto:Contact = {
      ...nuevoContacto,
      id: Math.random().toString(),
      address: '',
      image: '',
      company: '',
      isFavourite: true,
    }
    this.contacts.push(contacto);
  }

  editContact() { }

  /** Borra un contacto */
  deleteContact(id:string) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  }

}

