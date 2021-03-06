import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Installed separatly
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    // Make sure the string matches
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    ServerModule,
    ServerTransferStateModule,
    AppModule,
    ModuleMapLoaderModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ServerAppModule { }
