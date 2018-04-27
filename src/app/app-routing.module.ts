import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent, LoginComponent, AdminHomeComponent } from './components/components';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
	{ path: '', redirectTo: 'home/mail', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: AdminHomeComponent, canActivate: [AuthGuardService], children: [
		{ path: 'mail', component: InboxComponent },
		{ path: '', redirectTo: 'home', pathMatch: 'full' }
	] },
	{ path: '**', redirectTo: 'inbox' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
