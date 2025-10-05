import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { contactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-contact-list-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrls: ['./contact-list-item.scss']
})
export class ContactListItem {
  contact = input.required<Contact>();
  aleatorio = Math.random();
  contactService = inject(contactService);
}
