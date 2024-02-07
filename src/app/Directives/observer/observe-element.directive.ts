import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appObserveElement]',
  standalone: true
})
export class ObserveElementDirective implements OnInit {
  @Output() isIntersecting: EventEmitter<HTMLElement> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const observer = new window.IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting)
        this.isIntersecting.emit(this.elementRef.nativeElement);
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }
}
