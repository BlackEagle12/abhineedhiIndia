import { Component, Input } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css'
})
export class QualityComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }

  @Input() quality: string = "";
  // @Input() animationClass: string = "";
}
