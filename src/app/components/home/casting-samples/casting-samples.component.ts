import { Component, ViewChild } from '@angular/core';
import {NgFor} from '@angular/common'
import { SectionComponent } from '../../common/section/section.component';

@Component({
  selector: 'app-casting-samples',
  standalone: true,
  imports: [NgFor,SectionComponent],
  templateUrl: './casting-samples.component.html',
  styleUrl: './casting-samples.component.css'
})
export class CastingSamplesComponent {

  @ViewChild('menuItem0') menuItem0: any;
  @ViewChild('menuItem1') menuItem1: any;
  @ViewChild('menuItem2') menuItem2: any;
  @ViewChild('menuItem3') menuItem3: any;

  gdcCastingsamples: string[] = [
    '/assets/Images/GDC-Casting-Samples/IMG_2542.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2572.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2578.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2580.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2582.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2584.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2586.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2589.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2591.PNG',
    '/assets/Images/GDC-Casting-Samples/IMG_2593.PNG',
    '/assets/Images/GDC-Casting-Samples/GDC_PART.jpeg',    
  ]

  hpdcCastingsamples: string[] = [
    '/assets/Images/HPDC-Samples/IMG_2525.PNG',
    '/assets/Images/HPDC-Samples/IMG_2529.PNG',
    '/assets/Images/HPDC-Samples/IMG_2533.PNG',
    '/assets/Images/HPDC-Samples/IMG_2535.PNG',
    '/assets/Images/HPDC-Samples/IMG_2538.PNG',
    '/assets/Images/HPDC-Samples/IMG_2540.PNG',
    '/assets/Images/HPDC-Samples/IMG_2541.PNG',
    '/assets/Images/HPDC-Samples/IMG_2543.PNG',
    '/assets/Images/HPDC-Samples/IMG_2545.PNG',
    '/assets/Images/HPDC-Samples/IMG_2547.PNG',
    '/assets/Images/HPDC-Samples/HPDC.JPG'
  ]

  lpdcCastingsamples: string[] = [
    '/assets/Images/LPDC-Casting-Samples/DSC04670.JPG',
    '/assets/Images/LPDC-Casting-Samples/LPDC.JPG',
  ]

  jigBoringsamples: string[] = [
    '/assets/Images/JIG-Boring/DSC04597.JPG',
  ]

  sampleList: string[][] = [this.gdcCastingsamples, this.hpdcCastingsamples, this.lpdcCastingsamples, this.jigBoringsamples];
  urlList: string[] = this.gdcCastingsamples;


  loadGalarryImages = (index: number, event: any) => {
    this.menuItem0.nativeElement.classList.remove('selected')
    this.menuItem1.nativeElement.classList.remove('selected')
    this.menuItem2.nativeElement.classList.remove('selected')
    this.menuItem3.nativeElement.classList.remove('selected')

    let element = event.target || event.srcElement || event.currentTarget;
    element.classList.add('selected')
    this.urlList = this.sampleList[index]
  }

}
