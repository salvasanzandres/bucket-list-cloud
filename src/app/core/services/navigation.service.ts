import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    displayNavigation$ = new  BehaviorSubject<boolean>(false);

  constructor() { }

  setNavigation(value: boolean) {
      this.displayNavigation$.next(value);
  }
}
