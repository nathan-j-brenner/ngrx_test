import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {User} from '../models/user.model';

@Injectable()
export class AuthService {
	user: Observable<User>;

	constructor(private store: Store<AppStore>){
		this.user = store.select('user');
	}

	registerUser(user: User) {
		 // todo
	}
}