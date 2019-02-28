import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from '@angular/router';
import { BookNewComponent } from '../book-new/book-new.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(
    component: BookNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    if (!component.isSaved()) {
      return window.confirm('Do you really want to cancel?');
    } else {
      return true;
    }
  }
}
