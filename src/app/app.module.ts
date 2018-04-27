import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent, InboxComponent, AdminHomeComponent } from './components/components';
import { MailService } from './services/mail.service';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
	declarations: [
		AppComponent,
		InboxComponent,
		LoginComponent,
		AdminHomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule
	],
	providers: [MailService, AuthService, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
