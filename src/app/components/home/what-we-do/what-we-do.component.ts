import { Component } from '@angular/core';
import { SectionComponent } from '../../common/section/section.component';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';
import { NgFor } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [SectionComponent,ObserveElementDirective,NgFor,FontAwesomeModule],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }

  handlemouseHover(event: MouseEvent) {
    const element = (event.target as Element);
    element.classList.add("animate__fadeInDownBig");
    element.classList.remove("animate__fadeInDownBig");
  }

  handlemouseout(event: MouseEvent) {
    const element = (event.target as Element);
    element.classList.add("animate__fadeOutDownBig");
    element.classList.remove("animate__fadeOutDownBig");
  }

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }

  whyUsCards: any[] = [
    {
      imageUrl : "",
      lable: 'Expanding economy',
      icon: 'money-bill'
    },
    {
      imageUrl : "",
      lable: 'Accomplished',
      icon: 'clipboard-list'
    },
    {
      imageUrl : "",
      lable: 'Deep-rooted',
      icon: 'globe'
    },
    {
      imageUrl : "",
      lable: 'trustworthy',
      icon: 'shield-heart'
    },
    {
      imageUrl : "",
      lable: 'apt, quick, and ready',
      icon: 'truck-fast'
    },
  ]
}
