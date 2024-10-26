import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None, 
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit{

  // @ContentChild('input') private control!: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef);



constructor() {
  afterRender(()=> {
    console.log('afterRender,');
  });

  afterNextRender(()=> {
    console.log('afterNextRender')
  })
}






  // @HostListener('click')
  onClick() {
    console.log('Host element clicked !', this.el);
    console.log('On click content In it',  this.control().nativeElement)
  }



  ngAfterContentInit(): void {
    console.log('After content In it',  this.control().nativeElement)
  }
}
