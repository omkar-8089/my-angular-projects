import { Component, input} from '@angular/core';

@Component({
  selector: 'app-dashboard-items',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-items.component.html',
  styleUrl: './dashboard-items.component.scss',
  // encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dashboard-item'
  }
})
export class DashboardItemsComponent {
  image = input.required<{
    src: string;
    alt: string;
  }>();
  header = input.required<string>();
}
