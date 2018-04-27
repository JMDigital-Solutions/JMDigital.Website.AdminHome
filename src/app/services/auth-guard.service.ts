import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(
		private _authService: AuthService,
		private _router: Router
	) { }

	canActivate(route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

		if (this._authService.isAuthenticated())
			return true;

		this._router.navigate(['login'], { queryParams: { returnUrl: state.url } });
	}

}
