import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/common/nav/nav.component';
import { MainAreaComponent } from './components/common/main-area/main-area.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,MainAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // animations: [
  //   trigger('try', [
  //     transition('void => *', [
  //       style({ transform: 'translatex(-100%)'}),
  //       animate(20000, style({ transform: 'translatex(0%)'}))
  //     ])
  //   ])
  // ]
})
export class AppComponent{

  title = 'abhineedhiindia';
  constructor() {   
  }
}