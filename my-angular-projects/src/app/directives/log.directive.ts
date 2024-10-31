import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()',
    'fromPage': 'fromPage'
  }
})
export class LogDirective {
  fromPage = input<string>('');
  private elementRef = inject(ElementRef);
  constructor() {
    effect(()=> {
      console.log(this.fromPage())
    })
   }

  onLog() {
   
    console.log('CLICKED');
    console.log(this.elementRef.nativeElement)
  }
}
