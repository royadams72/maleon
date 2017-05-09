import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AccountsComponent} from './components/accounts/accounts.component';
import {TaxComponent} from './components/tax/tax.component';
import {ConsultComponent} from './components/consult/consult.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
   {path: "accountancy", component: AccountsComponent},
   {path: "taxation", component: TaxComponent},
   {path: "consultancy", component: ConsultComponent},
   {path: "", component: HomeComponent},
   {path: "contact", component: HomeComponent},
   {path: "**", component: HomeComponent},
]
/*animateNav(bgState, servicesUL, defaultUL)
},HomeComponent
{path: "", component: HomeComponent},

*/
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
