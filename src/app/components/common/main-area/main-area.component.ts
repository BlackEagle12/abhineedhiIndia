import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home/home.component';
import { AboutComponent } from '../../about/about/about.component';

@Component({
  selector: 'app-main-area',
  standalone: true,
  imports: [HomeComponent,AboutComponent],
  templateUrl: './main-area.component.html',
  styleUrl: './main-area.component.css'
})
export class MainAreaComponent {

}
