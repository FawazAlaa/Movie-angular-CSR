import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Languages } from '../languages';


@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, CommonModule, DropdownModule, FormsModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private languageService = inject(Languages);


  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  languages = [
    { label: 'English', value: 'en-US' },
    { label: 'العربية', value: 'ar-EG' },
    { label: 'Français', value: 'fr-FR' },
    { label: '中文', value: 'zh-CN' }
  ];

  selectedLanguage = this.languages[0];

  changeLanguage(lang: any) {
    this.selectedLanguage = lang;
    this.languageService.setLanguage(lang.value);
  }



}
