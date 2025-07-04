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
languageService = inject(Languages);
  selectedLanguage = this.languageService.getLanguage();



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

  ngOnInit(): void {
    this.languageService.setLanguage(this.selectedLanguage); 
  }

}
