import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { AboutComponent } from '../about/about.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { CastingSamplesComponent } from '../casting-samples/casting-samples.component';
import { TeamComponent } from '../team/team.component';
import { VideoComponent } from '../video/video.component';
import { ClientsComponent } from '../clients/clients.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,AboutComponent, NumbersComponent,CastingSamplesComponent,TeamComponent,VideoComponent,ClientsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  about: any = {
    title: "WE ARE Abhinitee india",
    imgUrl: "/assets/Images/MANUFACTURING-COMPETENCY/ASSEMBLY/DSC04646-updated.jpg",
    storyHeading: "THE BRAND STORY",
    story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque beatae nemo, reprehenderit distinctio et totam eveniet quo asperiores cum similique vel dignissimos dolores provident placeat. Animi inventore labore fugit esse veritatis magni alias dicta similique repellat corrupti, velit officiis aliquid libero, illum ea nobis, maiores asperiores beatae? Ratione quisquam accusantium sequi quibusdam velit quasi esse eveniet harum enim aspernatur exercitationem unde quidem tenetur molestias omnis quam reprehenderit, eligendi rem suscipit repellat praesentium voluptatem veritatis atque. Voluptatum magnam vel rerum! Voluptates officia, ex labore exercitationem architecto deserunt sit beatae omnis magnam, voluptatibus odio accusamus? Quibusdam laudantium praesentium dolore modi minima?"
  }
}
