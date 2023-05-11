import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './Children/children.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent, ChildrenComponent, ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
