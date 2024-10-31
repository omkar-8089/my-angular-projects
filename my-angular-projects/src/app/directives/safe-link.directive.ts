import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [
    {
      directive: LogDirective,
      inputs: ['fromPage']
    }
  ]
})
export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});
    hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsLeave = window.confirm('Do you want to leave the app?');

    // 1. Solution using event, which will generate on click of the host element.

    // const address =  (event.target as HTMLAnchorElement).href; 
    
    // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
    
    
    // 2. Solution by Injecting the HOST element Ref

    const address = this.hostElementRef.nativeElement.href;
    this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();


    if (wantsLeave) {
      return;
    }
    event?.preventDefault();
  }
}
