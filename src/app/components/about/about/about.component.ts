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
    title: "WE ARE MUNDRA",
    imgUrl: "/assets/Images/MANUFACTURING-COMPETENCY/ASSEMBLY/DSC04646-updated.jpg",
    storyHeading: "THE BRAND STORY",
    story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque beatae nemo, reprehenderit distinctio et totam eveniet quo asperiores cum similique vel dignissimos dolores provident placeat. Animi inventore labore fugit esse veritatis magni alias dicta similique repellat corrupti, velit officiis aliquid libero, illum ea nobis, maiores asperiores beatae? Ratione quisquam accusantium sequi quibusdam velit quasi esse eveniet harum enim aspernatur exercitationem unde quidem tenetur molestias omnis quam reprehenderit, eligendi rem suscipit repellat praesentium voluptatem veritatis atque. Voluptatum magnam vel rerum! Voluptates officia, ex labore exercitationem architecto deserunt sit beatae omnis magnam, voluptatibus odio accusamus? Quibusdam laudantium praesentium dolore modi minima?"
  }

  onElementIntersecting(element: HTMLElement, cssClassName: string) {
    element.classList.add('animate__animated')
    element.classList.add(cssClassName)
  }
}
