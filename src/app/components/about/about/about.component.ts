import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { QualityComponent } from '../quality/quality.component';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { AboutComponent as HomeAboutComponent } from '../../home/about/about.component';
import { ObserveElementDirective } from '../../../Directives/observer/observe-element.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, QualityComponent, CardsComponent, FooterComponent,HomeAboutComponent, ObserveElementDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    
  about: any = {
    title: "Abhinitee India",
    imgUrl: "/assets/Images/MANUFACTURING-COMPETENCY/ASSEMBLY/DSC04646-updated.jpg",
    storyHeading: null,
    descriptionHeader: "Abhinitee India",
    story: "AbhiniteeIndia stands at the forefront of precision engineering, specializing in the manufacturing of a diverse range of dies tailored to meet the exacting needs of industries worldwide. With a focus on excellence and innovation, we take pride in our expertise in High-Pressure Die Casting (HPDC), delivering superior quality dies that elevate production efficiency and product integrity. While our proficiency in Low-Pressure Die Casting (LPDC) and other casting techniques remains unparalleled, it is our mastery of HPDC that truly sets us apart. Combining cutting-edge technology with meticulous craftsmanship, we strive to exceed industry standards and surpass client expectations at every turn. Partner with AbhiniteeIndia for precision, reliability, and innovation in die manufacturing, where HPDC takes center stage in our commitment to excellence"
  }

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
