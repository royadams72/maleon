import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from './components/about/about.component';
import {AccountsComponent} from './components/accounts/accounts.component';
import {TaxComponent} from './components/tax/tax.component';
import {ConsultComponent} from './components/consult/consult.component';
import {HomeComponent} from './components/home/home.component';
import { LegalsComponent } from './components/legals/legals.component';
const appRoutes: Routes = [
  {path: "about", component: AboutComponent},
   {path: "accountancy", component: AccountsComponent},
   {path: "taxation", component: TaxComponent},
   {path: "consultancy", component: ConsultComponent},
    {path: "legals", component: LegalsComponent},
   {path: "", component: HomeComponent},
   {path: "contact", component: HomeComponent},
   {path: "**", component: HomeComponent},
]
/*animateNav(bgState, servicesUL, defaultUL)
},HomeComponent
{path: "", component: HomeComponent},

*/
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
