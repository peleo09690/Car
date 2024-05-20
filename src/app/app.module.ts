import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonAppModule } from '@common/common.module';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@layout/layout.module';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // App core, common & dependency modules
    CoreModule.forRoot(),
    CommonAppModule.forRoot(),
    LayoutModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
