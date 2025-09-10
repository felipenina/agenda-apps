import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "",
    component: LoggedLayout,
    children: [
      {
        path: "",
        component: ContactsPage
      },
      {
        path: "contacts/:id",
        component: ContactDetailsPage
      },
    ]
  },

];
