import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
const APP_ROUTES = [
    {path:"",component:ContactsComponent}
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES, { enableTracing: false });