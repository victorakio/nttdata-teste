import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  show: boolean = false;

  showMobileMenu() {
    console.log(this.show);
    return (this.show = !this.show);
  }
}
