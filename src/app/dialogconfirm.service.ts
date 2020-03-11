import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogconfirmService {

  confirm(message?: string) {
    return new Promise(resolve => {
      return resolve(window.confirm(message || 'Confirma ?'));
    });
  }

  constructor() { }
}
