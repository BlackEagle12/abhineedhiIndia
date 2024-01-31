import { Component, OnDestroy, OnInit } from '@angular/core';
import { LeftArrowComponent } from '../../common/left-arrow/left-arrow.component';
import { RightArrowComponent } from '../../common/right-arrow/right-arrow.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [LeftArrowComponent,RightArrowComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit,OnDestroy{

  currentIndex: number = 0;
  leftIcon: string = "angle-left";
  intervalId: any = ""
  sliderImagesArray: string[] = [
    "/assets/Images/COMPANY-PHOTOS/DSC04535.JPG",
    "/assets/Images/COMPANY-PHOTOS/DSC04554.JPG"
  ]

  getCurrentSlideUrl(): string {    
    return `${this.sliderImagesArray[this.currentIndex]}`;
  }

  slideLeft = () => {
    this.currentIndex <= 0 ? this.currentIndex = this.sliderImagesArray.length - 1 : this.currentIndex--;
  }
  
  slideRight = () => {
    (this.currentIndex >= this.sliderImagesArray.length - 1) ? this.currentIndex = 0 : this.currentIndex++;
  }

  ngOnInit(){
    // this.intervalId = interval(20000).subscribe(() => {
    //   console.log("called");
    // })
 }

  ngOnDestroy() {
    // if (this.intervalId) {
    //   this.intervalId.unsubscribe()
    // }
  }
}
