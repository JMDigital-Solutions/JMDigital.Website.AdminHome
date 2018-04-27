import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailService {

	private _apiUrl = 'https://api.jmdigital.com.ar/api/mail';

	constructor(private _http: HttpClient) { }

	getMails() {
		return this._http.get<InboxModel[]>('http://localhost:49970/api/mail/GetMails', { withCredentials: true })
			.map(
				(values) => {
					return values;
				}
			);
	}

}
