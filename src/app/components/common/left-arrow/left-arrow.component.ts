import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-arrow',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './left-arrow.component.html',
  styleUrl: './left-arrow.component.css'
})
export class LeftArrowComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }
}
