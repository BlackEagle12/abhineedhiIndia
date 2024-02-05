import { Component } from '@angular/core';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [ObserveElementDirective],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
