import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Languages {
  private selectedLanguage = signal<string>('en');

  setLanguage(lang: string) {
    this.selectedLanguage.set(lang);
  }

  getLanguage() {
    return this.selectedLanguage();
  }

  languageSignal() {
    return this.selectedLanguage;
  }
}
