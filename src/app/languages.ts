import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Languages {

    selectedLanguage = signal<string>('en-US'); // Default language

  setLanguage(lang: string) {
    this.selectedLanguage.set(lang);
  }

  getLanguage() {
    return this.selectedLanguage();
  }
}
