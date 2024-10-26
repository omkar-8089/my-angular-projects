import { AfterViewInit, Component, ElementRef, OnInit, output, ViewChild, viewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;

  // form = viewChild<ElementRef<HTMLFormElement>>('form');
  // form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  buttonComponentInstance = viewChild.required<ButtonComponent>(ButtonComponent);
  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('On In It', this.form);
  }

  ngAfterViewInit(): void {
    console.log('After View In It', this.form);
  }


  onSubmit(title: string, ticketText: string) {
    this.form.nativeElement.reset();
    console.log(`Submitted!`);
    this.add.emit({
      title,
      text: ticketText
    })
  }
}
