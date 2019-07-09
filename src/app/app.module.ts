import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HostBindingDirective } from './directives/host-binding.directive';
import { StructuralDirectiveDirective } from './directives/structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    HostBindingDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
