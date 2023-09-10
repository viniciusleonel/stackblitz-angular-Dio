import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { HelloComponent } from './components/hello.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';
import { LinkComponent } from './components/link.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    Button,
    EntryDataComponent,
    LinkComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}