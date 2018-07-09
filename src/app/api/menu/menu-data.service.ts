import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { } from 'rxjs/operators';
import * as Data from '../../menu/menu-items';

@Injectable({
	providedIn: 'root'
})
export class MenuDataService {
	private menuItems: any = Data;

	constructor() { }

	getMenuItems(): Observable<any>{
		return of(this.menuItems);
	}
}
