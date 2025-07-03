import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, CommonModule, DropdownModule, FormsModule,],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {


  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  languages = [
    { label: 'English', value: 'en' },
    { label: 'العربية', value: 'ar' },
    { label: 'Français', value: 'fr' },
    { label: '中文', value: 'zh' }
  ];

  selectedLanguage = this.languages[0];

  changeLanguage(lang: any) {
    this.selectedLanguage = lang;
    console.log(`Language switched to: ${lang.value}`);
    // Insert i18n logic or locale change here
  }

  openWatchlist() {
    console.log('Watchlist clicked');
    // Navigate or show modal
  }

}
