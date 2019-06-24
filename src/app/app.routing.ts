import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TaxComponent } from './components/tax/tax.component';
import { ConsultComponent } from './components/consult/consult.component';
import { HomeComponent } from './components/home/home.component';
import { LegalsComponent } from './components/legals/legals.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

import * as meta from './common/meta-tags'
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
   { path: 'about', component: AboutComponent, data: { title: 'About Ma’Leon Accountancy Services Limited', description: meta.DESCRIPTION.about } },
   { path: 'accountancy', component: AccountsComponent, data: { title: 'Accountancy Services', description: meta.DESCRIPTION.accounts } },
   { path: 'consultancy', component: ConsultComponent, data: { title: 'Consultancy', description: meta.DESCRIPTION.consultancy } },
   { path: 'contact', component: HomeComponent, data: { title: 'Ma’Leon Accountancy Services Limited', description: meta.DESCRIPTION.home } },
   { path: 'legals', component: LegalsComponent, data: { title: 'Ts and Cs, Disclaimer', description: meta.DESCRIPTION.legals } },
   { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: 'Privacy Policy', description: meta.DESCRIPTION.privacy_policy } },
   { path: 'taxation', component: TaxComponent, data: { title: 'Taxation Services', description: meta.DESCRIPTION.tax } },
   { path: '', component: HomeComponent, data: { title: 'Ma’Leon Accountancy Services Limited', description: meta.DESCRIPTION.home } },
   { path: '**', component: PagenotfoundComponent, data: { title: 'Ma’Leon Accountancy Services Limited', description: meta.DESCRIPTION.home } },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
