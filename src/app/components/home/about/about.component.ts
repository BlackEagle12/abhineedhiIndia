import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [FontAwesomeModule, ObserveElementDirective,NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }

  @Input() title: string = "";
  @Input() imgUrl: string = "";
  @Input() storyHeading: string | null= null;;
  @Input() story: string = "";
  @Input() descriptionHeader: string | null= null;

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
