import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactformComponent} from './contactform/contactform.component';
const APP_ROUTES = [
    {path:"",component:ContactsComponent},
    {path:"contact/:id",component:ContactformComponent},
    {path:"contact",component:ContactformComponent}
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES, { enableTracing: false });