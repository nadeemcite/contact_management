import { RouterModule, Routes } from '@angular/router'
const APP_ROUTES = []

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES, { enableTracing: false });