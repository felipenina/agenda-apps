export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  address: string
  email: string,
  image: string,
  number: string,
  company: string,
  isFavourite: boolean;
}

export interface NewContact {
  firstName: string;
  lastName: string;
  address: string;
  number: string;
  email: string;
  image: string;
  company: string;
  isFavourite: boolean;
}
