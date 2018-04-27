import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {

	private _apiUrl = '';
	private _token;

	constructor(
		private _http: HttpClient,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	login(login: LoginModel) {
		if (login.Username === 'juan.manuel.saad' && login.Password === '123456') {
			this._token = 'logged in';
			const returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
			this._router.navigate([returnUrl || '']);
		} else
			console.log('Falló el login: ', login);
	}

	isAuthenticated() {
		return this._token != null;
	}
}
