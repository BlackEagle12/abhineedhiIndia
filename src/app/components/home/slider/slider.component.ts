import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, of, timeout } from 'rxjs';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy{

  currentIndex: number = 0;
  leftIcon: string = "angle-left";
  intervalId: any = "";

  imageUrlList: string[] = [
    "/assets/Images/SliderImages/DSC04535.JPG",
    "/assets/Images/SliderImages/DSC04559.JPG",
    "/assets/Images/SliderImages/DSC04616.JPG",
    "/assets/Images/SliderImages/DSC04634.JPG"
  ]

  textList:string[] = [
    "Your Path to Industry Success",
    "A Platform for Industry Excellence",
    "Your Gateway to Industry Insights",
    "Visionary independenship"
  ]

  selectedIndex:number = 0;

  func = ()=> {
    if (++this.selectedIndex >= this.imageUrlList.length)
        this.selectedIndex = 0;
  }

  ngOnInit() : void{
    window.setInterval(this.func,10000)
  }

  ngOnDestroy(): void {
  }
}
