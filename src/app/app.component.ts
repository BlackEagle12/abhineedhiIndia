import { Component} from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event as RouterEvent, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/common/nav/nav.component';
import { NgIf } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{

  loading = true

  constructor(private router: Router) {
    this.router.events.subscribe((e : RouterEvent) => {
       this.navigationInterceptor(e);
     })
  }

  navigationInterceptor(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      window.setTimeout(() => {this.loading = false},2000)
    }

    if (event instanceof NavigationCancel) {
      window.setTimeout(() => {this.loading = false},2000)
    }
    if (event instanceof NavigationError) {
      window.setTimeout(() => {this.loading = false},2000)
    }
  }
}