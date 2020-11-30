import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'orbit-app';

  @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
  @ViewChild('ghostNavbar') ghostNavbarRef: ElementRef;

  /**
   * Definir a altura da navbar fantasma com base na navbar principal.
   */
  ngAfterViewInit(): void {
    const navbarHeight = this.navbarComponent.navbarHeight;
    console.log(this.ghostNavbarRef.nativeElement);
    this.ghostNavbarRef.nativeElement.style.height = navbarHeight + 'px';
  }
}
