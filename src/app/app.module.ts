import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchGistsComponent } from './gist-components/search-gists/search-gists.component';
import { Octokit } from "@octokit/core";

@NgModule({
  declarations: [
    AppComponent,
    SearchGistsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Octokit],
  bootstrap: [AppComponent]
})
export class AppModule { }
