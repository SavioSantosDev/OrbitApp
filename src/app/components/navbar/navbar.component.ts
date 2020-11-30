import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  menuCollapsed = true;

  @ViewChild('navbar') navbarRef: ElementRef;
  navbarHeight: number;

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  /**
   * Recuo da navbar ao fazer o scroll
   */
  ngAfterViewInit(): void {
    this.navbarHeight = this.navbarRef.nativeElement.offsetHeight;
    this.viewportScroller.setOffset([0, this.navbarHeight]);
  }

  /**
   * Rolar a página para a sesão indicada pelo id
   */
  onClickScroll(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }

}
